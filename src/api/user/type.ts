export type IUser = {
  id: number;
  registration_type: string | null;
  avatar: string | null;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_superuser: boolean;
  last_updated: string;
  last_login: string;
  last_logout: string;
  date_joined: string;
};

export interface IGetAllUserParams {
  owner?: string;
  sort?: string;
  filter?: string[];
  page?: number;
  limit?: number;
}

export interface IGetALlUser {
  results: IUser[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
