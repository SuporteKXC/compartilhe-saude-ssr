import { FormControl } from '@angular/forms';
import { creditCardValidator } from './credit-card-validator';

describe('CreditCardValidator', () => {
  const cartoesValidos = [
    '5259 1158 9539 2309', // visa
    '4532 3254 8240 8465', // visa
    '5572 7620 6310 8288', // mastercard
    '5579 7288 7458 3988', // mastercard
    '3729 157605 51852', // american-express
  ];

  const cartoesInvalidos = ['1234 5678 9101', '1123', '3222 222222 22222'];

  const cartoesValidosBandeirasNaoAceitas = [
    '6062 8276 8847 0895', // hipercard
    '6062 8239 7463 9897', // hipercard
    '3698 338203 2741', // diners-club
    '3014 409018 3351', // diners-club
  ];

  const bandeirasAceitas = ['visa', 'mastercard', 'american-express'];

  it.each(cartoesValidos)('Deve aceitar cartão %s como válido', (cartao) => {
    expect(creditCardValidator(bandeirasAceitas)(new FormControl(cartao))).toBeNull();
  });

  it.each(cartoesInvalidos)('Deve recusar cartão %s como inválido', (cartao) => {
    expect(creditCardValidator(bandeirasAceitas)(new FormControl(cartao))).toEqual({
      invalidCreditCard: true,
    });
  });

  it.each(cartoesValidosBandeirasNaoAceitas)(
    'Deve recusar cartão %s com bandeira inválida',
    (cartao) => {
      expect(creditCardValidator(bandeirasAceitas)(new FormControl(cartao))).toEqual({
        invalidCardBrand: true,
      });
    }
  );
});
