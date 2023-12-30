import type { IUser } from '../user/type';

export type IJob = {
  id: number;
  Title: string;
  User: IUser;
  Wage: string;
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
