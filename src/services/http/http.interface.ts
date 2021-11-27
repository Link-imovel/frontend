import { Method } from 'axios';

interface APICall {
  endpoint: string;
  headers?: Record<string, string>;
  method?: Method;
  token?: string;
  params?: Record<string, unknown>;
  data?: any;
  showJSON?: boolean;
  showConsoleLog?: boolean;
  title?: string;
  baseURL?: string;
}

export type { APICall };
