import type { ApiResource } from "~/interfaces/api/ApiResources";
import { environment } from "~/environments/environment";

export type Method = "POST" | "GET" | "PUT" | "DELETE";

export type UrlConstruct = "path" | "query";

export default function useApi() {
  async function makeRequestAsync<T, X>(
    headerOptions: { [key: string]: string } | null,
    resource: ApiResource,
    routeOptions: { type: UrlConstruct; key?: string; value: string }[] | null,
    method: Method,
    payload?: X
  ) {
    let url = `${environment.api}${resource}`;

    routeOptions?.forEach((x) => {
      if (x.type === "path") {
        url += `/${x.value}`;
      } else {
        if (url.includes("?")) {
          url += `?${x.key}=${x.value}`;
        } else {
          url += `&${x.key}=${x.value}`;
        }
      }
    });

    const options = new Request(url, {
      method,
      headers: headerOptions
        ? { "Content-Type": "application/json", ...headerOptions }
        : { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const response = await fetch(options);
    const data = await response.json();
    const status = response.status;

    type CustomResponse = [data: T, status: number];

    return [data, status] as CustomResponse;
  }

  return {
    makeRequestAsync,
  };
}
