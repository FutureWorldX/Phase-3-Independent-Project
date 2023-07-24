import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { AxiosInstance } from 'axios';
import { message } from 'antd';
import handleNetworkError from './handleNetworkError';

const SUCCESS = 0;

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000,
});

// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // your code
    return config;
  },
  (error: AxiosError) => {
    message.error(error.message);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message, data } = response.data;
    if (code === SUCCESS) {
      return data;
    } else {
      message.error(message);
      return Promise.reject(new Error(message));
    }
  },
  (error: AxiosError) => {
    handleNetworkError(error.response);
    return Promise.reject(error);
  }
);

export const http = {
  get<T = any>(
    url: string,
    param?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service({
      method: 'get',
      url: url,
      params: param,
      ...config,
    });
  },
  post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service({
      method: 'post',
      url: url,
      params: data,
      ...config,
    });
  },
  put<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service({
      method: 'put',
      url: url,
      params: data,
      ...config,
    });
  },
  delete<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service({
      method: 'delete',
      url: url,
      params: data,
      ...config,
    });
  },
};
