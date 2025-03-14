import { FormControl } from '@angular/forms';
import { DateTime, Duration } from 'luxon';
import { DEFAULT_DATE_FORMAT } from '../../constants/date-formats';
import { pastDateValidator } from './past-date-validator';

describe('dateValidator', () => {
  const validDates = [
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

  const invalidDates = ['25/03/2003', '14/01/2004', '05/11/1500', '01/01/2023'];

  const validDatesWithConfiguration = [
    {
      date: '26/10/2023',
      notBefore: DateTime.fromFormat('15/11/1889', DEFAULT_DATE_FORMAT),
    },
    {
      date: '15/11/1889',
      notBefore: DateTime.fromFormat('15/11/1889', DEFAULT_DATE_FORMAT),
    },
    {
      date: '19/04/2200',
      notBefore: DateTime.fromFormat('13/10/2000', DEFAULT_DATE_FORMAT),
    },
    {
      date: '10/04/2000',
      notBefore: DateTime.fromFormat('05/08/1000', DEFAULT_DATE_FORMAT),
    },
  ];

  const invalidDatesWithConfiguration = [
    {
      date: '15/11/1889',
      notBefore: DateTime.fromFormat('26/10/2023', DEFAULT_DATE_FORMAT),
    },
    {
      date: '15/11/1889',
      notBefore: DateTime.fromFormat('16/11/1889', DEFAULT_DATE_FORMAT),
    },
    {
      date: '19/04/2000',
      notBefore: DateTime.fromFormat('13/10/2000', DEFAULT_DATE_FORMAT),
    },
    {
      date: '10/04/2000',
      notBefore: DateTime.fromFormat('15/04/2000', DEFAULT_DATE_FORMAT),
    },
  ];

  validDates.forEach((date) => {
    it(`Deve aceitar a data válida: ${date}`, () => {
      expect(pastDateValidator()(new FormControl(date))).toBeNull();
    });
  });

  invalidDates.forEach((date) => {
    it(`Não deve aceitar a data inválida: ${date}`, () => {
      expect(pastDateValidator()(new FormControl(date))).toEqual({ pastDate: true });
    });
  });

  validDatesWithConfiguration.forEach(({ date, notBefore }) => {
    it(`Deve aceitar a data válida após ${notBefore.toFormat(DEFAULT_DATE_FORMAT)}: ${date}`, () => {
      expect(pastDateValidator({ notBefore })(new FormControl(date))).toBeNull();
    });
  });

  invalidDatesWithConfiguration.forEach(({ date, notBefore }) => {
    it(`Não deve aceitar a data inválida após ${notBefore.toFormat(DEFAULT_DATE_FORMAT)}: ${date}`, () => {
      expect(pastDateValidator({ notBefore })(new FormControl(date))).toEqual({ pastDate: true });
    });
  });
});
