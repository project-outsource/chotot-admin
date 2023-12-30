import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { IUser } from '../auth';
import { getAdminById, getAllAdmins } from './requests';
import type { IGetALlAdmin, IGetAllAdminParams } from './type';

export const useGetAllAdminQuery = (
  params: IGetAllAdminParams,
  options?: UseQueryOptions<IGetALlAdmin, AxiosError, IGetALlAdmin, any>
) => {
  return useQuery(['admin', params], () => getAllAdmins(params), options);
};

export const useGetAdminById = (adminId: number, options?: UseQueryOptions<IUser, AxiosError, IUser, any>) => {
  return useQuery(['admin', adminId], () => getAdminById(adminId), options);
};
