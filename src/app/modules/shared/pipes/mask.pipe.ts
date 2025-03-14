import { Pipe, PipeTransform } from '@angular/core';
import Inputmask from 'inputmask';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  transform(value: string, mask: string | string[]): string {
    return Inputmask.format(value, { mask, placeholder: '' });
  }
}
