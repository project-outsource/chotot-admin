export type IJob = {
  id: number;
};

export interface IGetAllUserParams {
  owner?: string;
  sort?: string;
  filter?: string[];
  page?: number;
  limit?: number;
}

export interface IGetALlJob {
  results: IJob[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
