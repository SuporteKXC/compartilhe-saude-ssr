export function onlyDigits(value: string): string {
  return value && value.length > 0 ? value
    .split('')
    .filter((letter) => letter.match(/\d/))
    .join('') : value;
}
