export function enumNameFromEnumValue<T extends object>(e: T, value: T[keyof T]): keyof T {
  const indexOfValue = Object.values(e).indexOf(value);
  return Object.keys(e)[indexOfValue] as unknown as keyof T;
}
