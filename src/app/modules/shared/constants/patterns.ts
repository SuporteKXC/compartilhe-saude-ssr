// aceita celulares e telefones, com ou sem parenteses no DDD, hifens ou espaços entre o DDD e o número
export const TELEFONE_PATTERN =
  /^\(?(1[1-9]|2[12478]|3([1-5]|[7-8])|4[1-9]|5(1|[3-5])|6[1-9]|7[134579]|8[1-9]|9[1-9])\)? ?9?[0-9]{4}-?[0-9]{4}$/;

export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s]).{6,}$/;

export const CEP_PATTERN = /^\d{5}-?\d{3}$/;

export const UUID_PATTERN = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

export const DIGITO_PATTERN = /^[0-9xX]+$/;