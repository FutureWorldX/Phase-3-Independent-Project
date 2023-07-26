import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import type { AxiosInstance } from 'axios';
import { message } from 'antd';
import handleNetworkError from './handleNetworkError';

const SUCCESS = 0;

const service: AxiosInstance = axios.create({
  baseURL: 'http://localhost:9292/',
  timeout: 60 * 1000,
});

// request interceptor
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => config,
  (error: AxiosError) => {
    message.error(error.message);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message: responseMessage, data } = response.data;
    if (code === SUCCESS) {
      return data;
    } 
      const errorMessage = message.error(responseMessage);

      /* eslint-disable-next-line no-console */
      console.error(errorMessage);
      
      /* eslint-disable-next-line no-console */
      console.error(responseMessage);

      return Promise.reject(new Error(responseMessage));
  },
  (error: AxiosError) => {
    handleNetworkError(error.response);
    
    /* eslint-disable-next-line no-console */
    console.error(error.stack);

    return Promise.reject(error);
  }
);

const http = {
  async get<T = any>(
    url: string,
    param?: object,
    config?: InternalAxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await service({
        method: 'get',
        url,
        params: param,
        ...config,
      });

      /* eslint-disable-next-line no-console */
      console.log('Response:', response); // Log the response object
      const { code, message: responseMessage, data } = response.data;

      if (code === SUCCESS) {
        return data;
      } 

      /* eslint-disable-next-line no-console */
      console.error('Error loading data:', responseMessage.stack);
      return Promise.reject(new Error(responseMessage));

    } catch (error) {

      /* eslint-disable-next-line no-console */
      console.error('Error making GET request:', error);
      
      return Promise.reject(error);
    }
  },
  async post<T = any>(
    url: string,
    data?: object,
    config?: InternalAxiosRequestConfig
  ): Promise<T> {
    return service({
      method: 'post',
      url,
      params: data,
      ...config,
    });
  },
  async put<T = any>(
    url: string,
    data?: object,
    config?: InternalAxiosRequestConfig
  ): Promise<T> {
    return service({
      method: 'put',
      url,
      params: data,
      ...config,
    });
  },
  async delete<T = any>(
    url: string,
    data?: object,
    config?: InternalAxiosRequestConfig
  ): Promise<T> {
    return service({
      method: 'delete',
      url,
      params: data,
      ...config,
    });
  },
};

export default http;