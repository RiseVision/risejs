export interface BaseApiResponse {
  success: boolean;
}

export type rs = <R>(obj: {
  noApiPrefix?: boolean;
  headers?: any;
  params?: any;
  path: string;
  method?: string;
  data?: any;
}) => Promise<R>;
