import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DateTime } from 'luxon';
import { DEFAULT_DATE_FORMAT } from '../../constants/date-formats';

export function pastDateValidator(config?: { notBefore?: DateTime }): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const date = DateTime.fromFormat(control.value, DEFAULT_DATE_FORMAT);

    if (config?.notBefore) {
      if (date < config.notBefore) return { pastDate: true };
    } else {
      if (date < DateTime.now()) return { pastDate: true };
    }

    return null;
  };
}
