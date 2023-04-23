export interface Item {
  key: string;
  value: string;
}

export type Items = Array<Item>;

export interface SearchResponse<DataResponse = unknown> {
  collection: Collection;
  data: Array<DataResponse>;
}

export interface ComplexFilter {
  field: "make_id" | "year" | "model";
  op: "in" | "not in" | "like" | "not like";
  val: string[] | number | string;
}

export interface PaginationResponse<DataResponse = unknown> {
  data: Array<DataResponse>;
  pagination: Pagination;
}

export interface Pagination {
  currentPage: number;
  hasNextPage: boolean;
  nextPage: number;
}

export interface Collection {
  url: string;
  count: number;
  pages: number;
  total: number;
  next: string;
  prev: string;
  first: string;
  last: string;
}

export interface Colors {
  id: string;
  make_model_trim_id: string;
  name: string;
  rgb: string;
}

export interface Models {
  id: string;
  make_id: string;
  name: string;
  make: Makes;
}

export interface Makes {
  id: string;
  name: string;
}
