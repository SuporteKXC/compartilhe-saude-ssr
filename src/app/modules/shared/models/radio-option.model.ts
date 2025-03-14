export interface RadioOption<T> {
  label: string;
  value: T;
  tooltip?: string;
}

export function radioOptionsFromEnum<T extends object>(
  e: T, 
  tooltips: Record<string, string | undefined> = {}
): { value: keyof T; label: string; tooltip?: string }[] {
  return Object.entries(e).map(([value, label]) => ({
    value: value as keyof T,
    label,
    tooltip: tooltips[label] ?? undefined,
  }));
}
