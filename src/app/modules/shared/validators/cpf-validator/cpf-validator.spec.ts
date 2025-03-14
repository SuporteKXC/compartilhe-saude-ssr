import { FormControl } from '@angular/forms';
import { cpfValidator } from './cpf-validator';

describe('CpfValidator', () => {
  const cpfsValidos = [
    '69446941075',
    '56503685033',
    '19827187066',
    '31669518060',
    '421.894.400-84',
    '634.788.630-82',
    '339.582.430-61',
    '174.741.820-09',
  ];

  const cpfsInvalidos = [
    '123456789',
    '12345678910',
    '1234567891012',
    '00000000000',
    '22222222222',
    '69446941072',
    '56503685031',
    '19827187063',
    '421.894.400-44',
    '634.788.630-12',
    '339.582.430-00',
  ];

  cpfsValidos.forEach((cpf) => {
    it(`Deve aceitar o CPF válido: ${cpf}`, () => {
      expect(cpfValidator(new FormControl(cpf))).toBeNull();
    });
  });

  cpfsInvalidos.forEach((cpf) => {
    it(`Não deve aceitar o CPF inválido: ${cpf}`, () => {
      expect(cpfValidator(new FormControl(cpf))).toEqual({ invalidCpf: true });
    });
  });
});
