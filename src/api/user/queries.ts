import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { IUser } from '../auth';
import { getAllUsers, getUserById } from './requests';
import type { IGetALlUser, IGetAllUserParams } from './type';

export const useGetAllUserQuery = (
  params: IGetAllUserParams,
  options?: UseQueryOptions<IGetALlUser, AxiosError, IGetALlUser, any>
) => {
  return useQuery(['user', params], () => getAllUsers(params), options);
};

export const useGetUserById = (userId: number, options?: UseQueryOptions<IUser, AxiosError, IUser, any>) => {
  return useQuery(['user', userId], () => getUserById(userId), options);
};
