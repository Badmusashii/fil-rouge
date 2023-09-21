export interface ResponseApi<T> {
  status: string;
  message: string;
  data: T;
}
