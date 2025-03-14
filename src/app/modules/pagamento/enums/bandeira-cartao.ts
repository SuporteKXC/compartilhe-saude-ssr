import cardValidator from 'card-validator';

export enum BandeiraCartao {
  AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
  ELO = 'ELO',
  HIPERCARD = 'HIPERCARD',
  MASTERCARD = 'MASTERCARD',
  VISA = 'VISA',

  BANDEIRA_NAO_ACEITA = 'BANDEIRA_NAO_ACEITA',
}

export function getBandeiraCartaoFromNumeroCartao(numeroCartao: string): BandeiraCartao {
  const cardBrand = cardValidator.number(numeroCartao).card?.type;

  switch (cardBrand) {
    case 'american-express':
      return BandeiraCartao.AMERICAN_EXPRESS;
    case 'elo':
      return BandeiraCartao.ELO;
    case 'hipercard':
      return BandeiraCartao.HIPERCARD;
    case 'mastercard':
      return BandeiraCartao.MASTERCARD;
    case 'visa':
      return BandeiraCartao.VISA;
    default:
      return BandeiraCartao.BANDEIRA_NAO_ACEITA;
  }
}
