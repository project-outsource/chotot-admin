import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllCareer, getCareerById } from './requests';
import type { ICareer, IGetAllUserParams } from './type';

export const useGetAllCareerQuery = (
  params: IGetAllUserParams,
  options?: UseQueryOptions<ICareer[], AxiosError, ICareer[], any>
) => {
  return useQuery(['career', params], () => getAllCareer(params), options);
};

export const useGetCareerById = (careerId: number, options?: UseQueryOptions<ICareer, AxiosError, ICareer, any>) => {
  return useQuery(['career', careerId], () => getCareerById(careerId), options);
};
