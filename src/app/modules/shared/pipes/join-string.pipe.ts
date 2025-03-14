import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinString'
})
export class JoinStringPipe implements PipeTransform {
  transform(stringList: string[], options?: JoinStringsOptions): string {
    const { separator = ', ', includeAnd = true } = options || {};
    const size = stringList.length;

    if (size === 0) {
      return "";
    }

    if (size === 1) {
      return stringList[0];
    }

    const beforeLastItem = stringList.slice(0, size - 1).join(separator);
    const lastItem = stringList[size - 1];

    return includeAnd ? `${beforeLastItem} e ${lastItem}` : beforeLastItem + separator + lastItem;
  }
}

interface JoinStringsOptions {
  separator?: string;
  includeAnd?: boolean;
}