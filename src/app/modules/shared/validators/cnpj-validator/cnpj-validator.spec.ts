import { FormControl } from "@angular/forms";
import { cnpjValidator } from "./cnpj-validator";

describe('CnpjValidator', () => {
  const cnpjValidos = [
    '42.020.757/0001-97',
    '60.620.215/0001-37',
    '45.859.391/0001-32',
    '87.179.286/0001-00',
  ];

  const cnpjInvalidos = [
    '99.999.999/9999-99',
    '15.345.123/999-99',
    '87.179.286/1000-00',
    '87.179.286/10001-00',
  ];
  
  cnpjValidos.forEach((cnpj) => {
    it(`Deve retornar null para o CNPJ valido: ${cnpj}`, () => {
      expect(cnpjValidator(new FormControl(cnpj))).toBeNull();
    });
  });

  cnpjInvalidos.forEach((cnpj) => {
    it(`Não deve um erro para o CNPJ inválido: ${cnpj}`, () => {
      expect(cnpjValidator(new FormControl(cnpj))).toEqual({ invalidCnpj: true });
    });
  });
});