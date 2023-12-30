import type { IUser } from '../auth';

export enum AdminRoles {
  IS_SUPER_ADMIN = 1,
  IS_ADMIN = 0,
}

export interface IGetAllAdminParams {
  filter?: string[];
  page?: number;
  limit?: number;
}

export interface IGetALlAdmin {
  data: IUser[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
