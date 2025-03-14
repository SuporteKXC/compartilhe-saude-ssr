import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { creditCardValidator } from '../../../shared/validators/credit-card-validator/credit-card-validator';
import cardValidator from 'card-validator';
import { CartaoCredito } from '../../models/cartao-credito.model';
import { Subscription, distinctUntilChanged } from 'rxjs';
import { onlyDigits } from 'src/app/modules/shared/functions/util/only-digits';
import { BandeiraCartao, getBandeiraCartaoFromNumeroCartao } from '../../enums/bandeira-cartao';

@Injectable({
  providedIn: 'root',
})
export class CartaoCreditoFormService {
  private static CARACTERES_ACEITOS_NOME_TITULAR = /[a-zA-z ]/;

  private formCartaoCredito = this.fb.group({
    numero: this.fb.nonNullable.control<string>('', {
      validators: [
        Validators.required,
        creditCardValidator(['visa', 'mastercard', 'elo', 'hipercard', 'american-express']),
      ],
    }),
    nomeTitular: this.fb.nonNullable.control<string>('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    validade: this.fb.nonNullable.control<string>('', { validators: [this.validadeValidator] }),
    cvv: this.fb.nonNullable.control<string>('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    qtdParcelas: this.fb.nonNullable.control<number>(1, {
      validators: [Validators.required],
    }),
  });

  private valueChangesSubscription?: Subscription;

  public get group(): FormGroup {
    return this.formCartaoCredito;
  }

  public get parsedData(): CartaoCredito {
    const rawData = this.formCartaoCredito.getRawValue();

    const [mes, ano] = rawData.validade.split('/');

    return {
      ...rawData,
      numero: onlyDigits(rawData.numero),
      validade: `${mes.padStart(2, '0')}/20${ano}`,
      bandeira: getBandeiraCartaoFromNumeroCartao(onlyDigits(rawData.numero)),
    };
  }

  constructor(private fb: FormBuilder) {
    this.valueChangesSubscription = this.formCartaoCredito.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(() => {
        this.updateValidatorsCvv();

        this.sanitizarNomeTitular();
      });
  }

  public unsubscribeFromValueChanges(): void {
    this.valueChangesSubscription?.unsubscribe();
  }

  private updateValidatorsCvv(): void {
    const cvvControl = this.formCartaoCredito.get('cvv');

    const cardBrand = getBandeiraCartaoFromNumeroCartao(
      this.formCartaoCredito.get('numero')?.value ?? ''
    );

    if (cardBrand === BandeiraCartao.AMERICAN_EXPRESS) {
      cvvControl?.setValidators([Validators.required, Validators.minLength(4)]);
    } else {
      cvvControl?.setValidators([Validators.required, Validators.minLength(3)]);
    }

    cvvControl?.updateValueAndValidity({ onlySelf: true });
  }

  private sanitizarNomeTitular() {
    const nomeTitular = (this.formCartaoCredito.get('nomeTitular')?.value as string).normalize(
      'NFD'
    );

    let nomeSanitizado = '';

    for (const caractere of nomeTitular.split('')) {
      if (caractere.match(CartaoCreditoFormService.CARACTERES_ACEITOS_NOME_TITULAR)) {
        nomeSanitizado += caractere;
      } else {
        nomeSanitizado += this.getCaractereSanitizado(caractere);
      }
    }

    setTimeout(() => {
      this.formCartaoCredito.get('nomeTitular')?.setValue(nomeSanitizado, { emitEvent: false });
    });
  }

  private getCaractereSanitizado(caractere: string) {
    const caractereSanitizado = caractere.replace(/\p{InCombiningDiacriticalMarks}/, '');

    // Não permite dígitos
    if (caractereSanitizado.match(/\d/)) return '';

    // Não permite caracteres que não sejam letras (!, @, $, etc..)
    if (!caractereSanitizado.match(/[a-zA-z]/)) return '';

    return caractereSanitizado;
  }

  private validadeValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;

    const [mes, ano] = value.split('/');

    if (!mes || !ano) return { invalidDate: true };

    if (!cardValidator.expirationMonth(mes).isValid) return { invalidDate: true };
    if (!cardValidator.expirationYear(ano).isValid) return { invalidDate: true };

    return null;
  }
}
