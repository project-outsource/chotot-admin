import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllSpecialStatus, getSpecialStatusById } from './requests';
import type { ISpecialStatus } from './type';

export const useGetAllSpecialStatusQuery = (
  params: any,
  options?: UseQueryOptions<ISpecialStatus[], AxiosError, ISpecialStatus[], any>
) => {
  return useQuery(['SpecialStatus', params], () => getAllSpecialStatus(params), options);
};

export const useGetSpecialStatusById = (
  SpecialStatusId: number,
  options?: UseQueryOptions<ISpecialStatus, AxiosError, ISpecialStatus, any>
) => {
  return useQuery(['SpecialStatus', SpecialStatusId], () => getSpecialStatusById(SpecialStatusId), options);
};
