import { AbstractControl, ValidationErrors } from '@angular/forms';
import { onlyDigits } from '../../functions/util/only-digits';

export function cnpjValidator(control: AbstractControl): ValidationErrors | null {
  const cnpj: string = control.value;

  if (!cnpj || cnpj.trim() === '') return null;

  const cnpjNormalizado = onlyDigits(cnpj);

  if (cnpjNormalizado.length !== 14) return { invalidCnpj: true };

  let resto = getResto(cnpjNormalizado, 5, 11);

  const primeiroDigito = getDigitoVerificador(resto);
  if (primeiroDigito !== parseInt(cnpj.at(-2) ?? '')) return { invalidCnpj: true };

  resto = getResto(cnpjNormalizado, 6, 12);

  const segundoDigito = getDigitoVerificador(resto);
  if (segundoDigito !== parseInt(cnpj.at(-1) ?? '')) return { invalidCnpj: true };

  return null;
}

const getResto = (data: string, end: number, index: number) => {
  let soma = 0;

  for (let i = 2; i <= 9; i++) {
    soma += parseInt(data.charAt(index)) * i;
    index -= 1;
  }

  for (let i = 2; i <= end; i++) {
    soma += parseInt(data.charAt(index)) * i;
    index -= 1;
  }

  return soma % 11;
};

const getDigitoVerificador = (resto: number) => {
  return resto < 2 ? 0 : 11 - resto;
};
