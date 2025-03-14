import { AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from 'src/environments/environment';

export function linkImageValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;
  
  if (typeof value !== 'string') return { invalidLinkImage: true };
  
  const regex = new RegExp(`^${environment.imgUrl}/`);
  if (!regex.test(value)) return { invalidLinkImage: true };

  return null;
}

export function linkRedeSocialValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;
  
  if (typeof value !== 'string') return { invalidLink: true };
  
  const regex = new RegExp(`^https://`);
  if (!regex.test(value)) return { invalidLink: true };

  return null;
}
