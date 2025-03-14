export function hasNonNullValues(obj: { [key: string]: unknown }) {
  if (typeof obj !== 'object' || obj === null) return false;

  for (const key in obj) {
    if (obj[key] !== null) {
      return true;
    }
  }

  return false;
}