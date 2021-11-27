import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { APICall } from './http.interface';

// import { getToken } from '../../utils/auth';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Client-Device': 'browser',
};

const httpClient = <T extends any>(call: APICall): AxiosPromise<T> => {
  let {
    endpoint,
    headers,
    method = 'GET',
    token = '',
    params = {},
    data = {},
    showJSON = process.env.NODE_ENV !== 'production',
    showConsoleLog = process.env.NODE_ENV !== 'production',
    title = '',
    baseURL = '',
  } = call;

  headers = { ...headers, ...defaultHeaders };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (showJSON) {
    console.log(`[${title} - CALL API JSON DATA]`, JSON.stringify(data));
  }

  if (showConsoleLog) {
    console.log(`[${title} - CALL API COMPLETE]`, {
      headers,
      method,
      endpoint,
      params,
      data,
    });
  }

  const apiBase: AxiosInstance = axios.create({
    baseURL: baseURL || process.env.BACKEND_SERVICE,
  });

  apiBase.interceptors.response.use(
    (response) => {
      if (showConsoleLog) console.log(`${title} - RESPONSE`, response);
      return response;
    },
    async (error) => {
      if (showConsoleLog) console.error(`${title} - ERROR`, error);
      return Promise.reject(error);
    }
  );

  if (method === 'GET' || method === 'DELETE') {
    return apiBase(endpoint, {
      params,
      headers,
      method,
    });
  }

  return apiBase(endpoint, {
    headers,
    method,
    data,
  });
};

export { httpClient };
