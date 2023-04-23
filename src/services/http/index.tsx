import type { RequestOptions, RequestParameters } from "$/types/services";

export class Service {
  private _headers = new Headers();
  protected constructor(
    protected readonly host: string,
    protected readonly baseUrl: string = ""
  ) {}

  public async get<ResponseData>(
    path: string,
    parameters?: RequestParameters,
    signal?: AbortSignal
  ): Promise<ResponseData | undefined> {
    return await this.request<ResponseData>(path, {
      parameters,
      signal,
    });
  }

  public async request<ResponseData = unknown>(
    path: string,
    options?: RequestOptions
  ): Promise<ResponseData | undefined> {
    const input = this.getUrl(path, options).toString();
    const response = await fetch(input, {
      method: "GET",
      headers: this.headers,
      signal: options?.signal,
    });

    return await this.getResponseBody(response);
  }

  protected get headers() {
    return this._headers;
  }

  protected set headers(headers: Headers) {
    this._headers = headers;
  }

  protected getUrl(path: string, options?: RequestOptions): URL {
    const url = new URL(`${this.baseUrl}${path}`, this.host);

    url.search = this.getParameters(options?.parameters);

    return url;
  }

  protected getParameters(parameters?: RequestParameters): string {
    return new URLSearchParams(parameters).toString();
  }

  private async getResponseBody<ResponseData = unknown>(
    response: Response
  ): Promise<ResponseData | undefined> {
    let responseObject: ResponseData;
    try {
      responseObject = await response.json();
    } catch {
      return undefined;
    }

    if (response.ok) {
      return responseObject;
    }

    throw new Error(
      `Request failed with status ${response.status}: ${JSON.stringify(
        responseObject
      )}`
    );
  }
}
