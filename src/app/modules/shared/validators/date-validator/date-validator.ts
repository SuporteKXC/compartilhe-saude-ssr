import { AbstractControl, ValidationErrors } from '@angular/forms';
import { DEFAULT_DATE_FORMAT } from '../../constants/date-formats';
import { DateTime } from 'luxon';

export function dateValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;

  const date = DateTime.fromFormat(control.value, DEFAULT_DATE_FORMAT);

  if (!date.isValid) return { invalidDate: true };

  return null;
}
