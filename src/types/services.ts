export type RequestParameters =
  | string
  | string[][]
  | URLSearchParams
  | Record<string, string>;

export interface RequestOptions {
  parameters?: RequestParameters;
  signal?: AbortSignal;
}
