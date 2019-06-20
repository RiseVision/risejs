import { AxiosRequestConfig } from "axios";
import axios from "axios";
import { rs } from "../types/base";
import { DefaultRouteParams, RouteDefinition } from "../APIdefinition";

export const requester = (
  nodeAddress,
  opts: { timeout: number; errorAsResponse: boolean }
) => <R>(obj: {
  noApiPrefix?: boolean;
  headers?: any;
  params?: any;
  path: string;
  method?: string;
  data?: any;
}): Promise<R> => {
  return axios({
    json: true,
    timeout: opts.timeout,
    url: `${nodeAddress}${obj.noApiPrefix ? "" : "/api"}${obj.path}`,
    ...obj
  } as AxiosRequestConfig)
    .catch(err => {
      if (err.response && err.response.data && !err.response.data.success) {
        if (opts.errorAsResponse) {
          return err.response;
        }
        return Promise.reject(
          new Error(err.response.data.error || err.response.data.message)
        );
      }
      return Promise.reject(err);
    })
    .then(resp => {
      if (resp.data.success === false) {
        if (opts.errorAsResponse) {
          return resp.data;
        }
        return Promise.reject(new Error(resp.data.error || resp.data.message));
      }
      return resp.data;
    });
};

export const buildAPIObject = <T = any>(
  req: rs,
  route: { [name: string]: RouteDefinition }
): T => {
  const toRet: T = {} as any;
  Object.keys(route).forEach(routeName => {
    const definition = { ...DefaultRouteParams, ...route[routeName] };
    toRet[routeName] = (...args: any[]): Promise<any> => {
      let params = {};
      if (definition.queryParamNames && definition.queryParamNames.length) {
        for (let i = 0; i < definition.queryParamNames.length; i++) {
          const paramName = definition.queryParamNames[i];
          const isOptional = paramName.endsWith("?");
          const name = isOptional ? paramName.slice(0, -1) : paramName;
          params[name] = args[i];

          if (!isOptional && typeof args[i] === "undefined") {
            throw new Error(`Parameter ${name} is not provided`);
          }
        }
      } else if (definition.queryParamObject) {
        params = args[0];
      }

      // compute body;
      let data = {};
      if (definition.hasBody) {
        data = definition.bodyModifier(args[0]);
      }
      return req({
        path: definition.url,
        params,
        method: definition.method,
        data
      });
    };
  });
  return toRet;
};
