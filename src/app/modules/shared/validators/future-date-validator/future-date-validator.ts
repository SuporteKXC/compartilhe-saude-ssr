import { AbstractControl, ValidationErrors } from '@angular/forms';
import { DEFAULT_DATE_FORMAT } from '../../constants/date-formats';
import { DateTime } from 'luxon';

export function futureDateValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;

  const date = DateTime.fromFormat(control.value, DEFAULT_DATE_FORMAT);

  if (date > DateTime.now()) return { futureDate: true };

  return null;
}
