import { AbstractControl, ValidatorFn } from '@angular/forms';
import { onlyDigits } from '../../functions/util/only-digits';
import cardValidator from 'card-validator';

export function creditCardValidator(validCardBrands: string[]): ValidatorFn {
  return (control: AbstractControl) => {
    const digits = onlyDigits(control.value);

    const creditCardValidation = cardValidator.number(digits);

    if (!creditCardValidation.isValid) return { invalidCreditCard: true };

    if (!validCardBrands.includes(creditCardValidation.card?.type ?? ''))
      return { invalidCardBrand: true };

    return null;
  };
}
