import type { AdminSchema } from '@/lib/validations/admin';
import type { UserSchema } from '@/lib/validations/user';

import type { IUser } from '../auth';
import { request } from '../axios';
import type { IGetALlAdmin, IGetAllAdminParams } from './type';

export const getAllAdmins = async (params?: IGetAllAdminParams): Promise<IGetALlAdmin> => {
  const { data } = await request({
    url: '/api/admin',
    method: 'GET',
    params,
  });

  return data;
};

export const getAdminById = async (adminId: number): Promise<IUser> => {
  const { data } = await request({
    url: `/api/admin/${adminId}`,
    method: 'GET',
  });

  return data;
};

export const createAdmin = async (user: AdminSchema): Promise<IUser> => {
  const { data } = await request({
    url: '/api/admin',
    method: 'POST',
    data: user,
  });

  return data;
};

export const deleteAdmin = async (adminId: number): Promise<IUser> => {
  const { data } = await request({
    url: `/api/admin/${adminId}`,
    method: 'DELETE',
  });

  return data;
};

export const updateAdmin = async ({
  adminId,
  admin,
}: {
  adminId: number;
  admin: Partial<UserSchema>;
}): Promise<IUser> => {
  const { data } = await request({
    url: `/api/admin/${adminId}`,
    method: 'PATCH',
    data: admin,
  });

  return data;
};
