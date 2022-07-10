export interface FindAllResponse<Type> {
  items: Array<Type>;
  limit: number;
  offset: number;
  total: number;
}

export interface FiltersQuery<Type> {
  filters?: Type;
  limit?: number;
  offset?: number;
}

export interface ServerResponse {
  code: number;
  success: boolean;
  message: string;
}
