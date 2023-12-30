import type { IUser } from '../auth';
import { request } from '../axios';
import type { IGetALlUser, IGetAllUserParams } from './type';

export const getAllUsers = async (params?: IGetAllUserParams): Promise<IGetALlUser> => {
  const { data } = await request({
    url: '/users/',
    method: 'GET',
    params,
  });

  return data;
};

export const getUserById = async (userId: number): Promise<IUser> => {
  const { data } = await request({
    url: `/api/admin/users/${userId}`,
    method: 'GET',
  });

  return data;
};

export const updateUser = async ({ userId, user }: { userId: number; user: any }): Promise<IUser> => {
  const { data } = await request({
    url: `/api/admin/users/${userId}`,
    method: 'PATCH',
    data: user,
  });

  return data;
};
