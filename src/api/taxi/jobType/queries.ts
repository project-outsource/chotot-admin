import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllJobType, getJobTypeById } from './requests';
import type { IJobType } from './type';

export const useGetAllJobTypeQuery = (
  params: any,
  options?: UseQueryOptions<IJobType[], AxiosError, IJobType[], any>
) => {
  return useQuery(['type-of-work', params], () => getAllJobType(params), options);
};

export const useGetJobTypeById = (
  jobTypeId: number,
  options?: UseQueryOptions<IJobType, AxiosError, IJobType, any>
) => {
  return useQuery(['type-of-work', jobTypeId], () => getJobTypeById(jobTypeId), options);
};
