export interface ParsedValue {
  [key: string]: string | ParsedValue | Array<ParsedValue>;
}