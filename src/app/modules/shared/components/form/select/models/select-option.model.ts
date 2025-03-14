export interface SelectOption<T> {
  label: string;
  value: T;
}

export function selectOptionsFromEnum<T extends object>(e: T): SelectOption<keyof T>[] {
  return Object.entries(e).map(([value, label]) => ({ value: value as keyof T, label }));
}
