export type State<T> = {
  [k in keyof T]?: T[k] | undefined;
};

export type StateKey = {
  [k: string]: unknown;
};