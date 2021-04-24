/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';

import AxiosClient from './AxiosClient';

type HttpClientParam = {
  queryParams?: Record<string, unknown>;
  body?: Record<string, unknown> | FormData;
};

const get = async <T = any>(
  url: string,
  params?: Omit<HttpClientParam, 'body'>,
) => {
  return AxiosClient.get<any, T>(url, {
    params: params?.queryParams,
  });
};

const post = async <T = any>(
  url: string,
  params: HttpClientParam,
  headers?: AxiosRequestConfig['headers'],
) => {
  const { queryParams, body } = params;
  return AxiosClient.post<any, T>(url, body, {
    params: queryParams,
    headers: headers,
  });
};

const put = async <T = any>(url: string, params: HttpClientParam) => {
  const { queryParams, body } = params;
  return AxiosClient.put<any, T>(url, body, {
    params: queryParams,
  });
};

const remove = async <T = any>(url: string, params?: HttpClientParam) => {
  return AxiosClient.request({
    method: 'DELETE',
    url: url,
    data: params?.body,
  });
};

const methods = {
  get,
  post,
  put,
  remove,
};

export default methods;
