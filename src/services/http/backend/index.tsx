import { apiBase, apiHost } from "$/config";
import type { RequestParameters } from "$/types/services";

import { Service } from "..";

export class CarAPI extends Service {
  private static instance: CarAPI;

  private constructor() {
    super(apiHost, apiBase);
  }

  protected getParameters(parameters?: RequestParameters): string {
    const params = new URLSearchParams(parameters);

    params.set("year", "2020"); // Free API only allows 2020

    return params.toString();
  }

  public static getInstance() {
    CarAPI.instance ||= new CarAPI();

    return CarAPI.instance;
  }
}

export default CarAPI.getInstance();
