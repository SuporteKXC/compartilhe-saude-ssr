import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfValidator(control: AbstractControl): ValidationErrors | null {
  if (typeof control.value !== 'string') return { invalidCpf: true };

  const digitos = control.value
    .split('')
    .filter((letter) => letter.match(/\d/))
    .map((digit) => parseInt(digit, 10));

  // 11 dígitos (999.999.999-99)
  if (digitos.length !== 11) return { invalidCpf: true };

  // números repetidos
  if (new Set(digitos).size === 1) return { invalidCpf: true };

  const somaPrimeiroDigito = digitos.slice(0, 9).reduce((soma, digito, indice) => soma + digito * (10 - indice), 0);
  const restoPrimeiroDigito = (somaPrimeiroDigito * 10) % 11;
  const primeiroDigito = [10, 11].includes(restoPrimeiroDigito) ? 0 : restoPrimeiroDigito;

  if (primeiroDigito !== digitos.at(-2)) return { invalidCpf: true };

  const somaSegundoDigito = digitos.slice(0, 10).reduce((soma, digito, indice) => soma + digito * (11 - indice), 0);
  const restoSegundoDigito = (somaSegundoDigito * 10) % 11;
  const segundoDigito = [10, 11].includes(restoSegundoDigito) ? 0 : restoSegundoDigito;

  if (segundoDigito !== digitos.at(-1)) return { invalidCpf: true };

  return null;
}
