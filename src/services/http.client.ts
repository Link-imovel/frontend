import axios, { AxiosRequestConfig, AxiosInstance, Method } from 'axios';

class HttpClient {
  private AxiosConfig: AxiosRequestConfig;
  private AxiosInstance: AxiosInstance;

  constructor() {
    this.AxiosConfig = {};
    this.AxiosInstance = axios.create({});
  }

  public async send<T = Record<string, unknown>>(): Promise<T> {
    try {
      const { data } = await this.AxiosInstance({
        ...this.AxiosConfig,
        baseURL: this.AxiosConfig.baseURL || process.env.BACKEND_SERVICE,
      });
      return data as T;
    } catch ({ response }) {
      throw response;
    }
  }

  public setConfig(data: AxiosRequestConfig): HttpClient {
    this.AxiosConfig = data;
    return this;
  }

  public setData<T = Record<string, unknown>>(payload: T): HttpClient {
    this.AxiosConfig.data = payload;
    return this;
  }

  public setHeaders(headers: Record<string, string>): HttpClient {
    this.AxiosConfig.headers = headers;
    return this;
  }

  public setParams(params: Record<string, unknown>): HttpClient {
    this.AxiosConfig.params = params;
    return this;
  }

  public setUrl(url: string): HttpClient {
    this.AxiosConfig.baseURL = url;
    return this;
  }

  public setPath(urlPath: string): HttpClient {
    this.AxiosConfig.url = urlPath;
    return this;
  }

  public setMethod(method: Method): HttpClient {
    this.AxiosConfig.method = method;
    return this;
  }
}

export default new HttpClient();
