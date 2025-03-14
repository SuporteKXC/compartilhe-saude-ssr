import { FormControl } from '@angular/forms';
import { dateValidator } from './date-validator';

describe('dateValidator', () => {
  const validDates = ['25/03/2003', '14/01/2004', '05/11/1500', '01/01/3000'];
  const invalidDates = ['ab/cd/efgh', '32/01/2023', '01/30/2000', '01/12/123'];

  validDates.forEach((date) => {
    it(`Deve aceitar a data válida: ${date}`, () => {
      expect(dateValidator(new FormControl(date))).toBeNull();
    });
  });

  invalidDates.forEach((date) => {
    it(`Não deve aceitar a data inválida: ${date}`, () => {
      expect(dateValidator(new FormControl(date))).toEqual({ invalidDate: true });
    });
  });
});
