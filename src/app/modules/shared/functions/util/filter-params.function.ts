export function filterParams<T>(params: T) {
  if (!params) return {};

  return Object.fromEntries(
    Object
      .entries(params as { [s: string]: T; })
      .filter(([, value]) => value)
  ) as {
    [param: string]: string | number | boolean | readonly (string | number | boolean)[];
  };
}
