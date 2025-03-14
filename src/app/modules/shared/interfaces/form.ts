import { AbstractControl } from '@angular/forms';

export type Form<T> = {
  [K in keyof T]: AbstractControl<T[K]> | AbstractControl<null>;
};
