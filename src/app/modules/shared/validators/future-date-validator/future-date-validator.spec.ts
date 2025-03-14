import { FormControl } from '@angular/forms';
import { futureDateValidator } from './future-date-validator';
import { DateTime, Duration } from 'luxon';
import { DEFAULT_DATE_FORMAT } from '../../constants/date-formats';

describe('futureDateValidator', () => {
  const validDates = ['25/03/2003', '14/01/2004', '05/11/1500', '01/01/2023'];
  const invalidDates = [
    DateTime.now()
      .plus(Duration.fromObject({ days: 2 }))
      .toFormat(DEFAULT_DATE_FORMAT),
    DateTime.now()
      .plus(Duration.fromObject({ months: 10 }))
      .toFormat(DEFAULT_DATE_FORMAT),
    DateTime.now()
      .plus(Duration.fromObject({ year: 1 }))
      .toFormat(DEFAULT_DATE_FORMAT),
    DateTime.now()
      .plus(Duration.fromObject({ days: 23, months: 12, years: 21 }))
      .toFormat(DEFAULT_DATE_FORMAT),
  ];

  validDates.forEach((date) => {
    it(`Deve aceitar a data válida: ${date}`, () => {
      expect(futureDateValidator(new FormControl(date))).toBeNull();
    });
  });

  invalidDates.forEach((date) => {
    it(`Não deve aceitar a data inválida: ${date}`, () => {
      expect(futureDateValidator(new FormControl(date))).toEqual({ futureDate: true });
    });
  });
});
