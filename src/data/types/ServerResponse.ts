export type ServerPaginationType = {
  pageCount: number;
  itemCount: number;
  hasNextPage: boolean;
  nextPage: number;
};

export type ServerResponseType<T> = {
  data: T[];
  pagination: ServerPaginationType;
};
