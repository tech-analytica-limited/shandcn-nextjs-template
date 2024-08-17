import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import config from "@/types/Config";
import { HttpHeaders, HttpMethod } from "@/types/Types";

const call = async <T>(
  method: HttpMethod,
  uri: string | (() => string),
  headers: HttpHeaders,
  body: object | undefined = undefined,
  shouldRefresh: boolean = true,
  baseUrl: string = config.apiUrl
): Promise<T> => {
  const url = typeof uri === "string" ? config.makeApiUrl(uri, baseUrl) : uri();

  const options: AxiosRequestConfig = {
    method,
    url,
    headers,
    data: body,
  };

  try {
    const response: AxiosResponse<T> = await axios(options);

    return response.data as T;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

// updated all the helper functions to support multiple url

export function get<T>(
  uri: string,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.get, uri, headers, undefined, true, baseUrl);
}

export function post<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.post, uri, headers, body, true, baseUrl);
}

export function put<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.put, uri, headers, body, true, baseUrl);
}

export function patch<T>(
  uri: string,
  body: object,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.patch, uri, headers, body, true, baseUrl);
}

export function del<T>(
  uri: string,
  headers: HttpHeaders = {},
  baseUrl: string = config.apiUrl
): Promise<T> {
  return call(HttpMethod.del, uri, headers, undefined, true, baseUrl);
}
