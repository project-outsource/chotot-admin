import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllJob, getJobById } from './requests';
import type { IGetALlJob, IJob } from './type';

export const useGetAllJob = (params: any, options?: UseQueryOptions<IGetALlJob, AxiosError, IGetALlJob, any>) => {
  return useQuery(['job', params], () => getAllJob(params), options);
};

export const useGetUserById = (jobId: number, options?: UseQueryOptions<IJob, AxiosError, IJob, any>) => {
  return useQuery(['job', jobId], () => getJobById(jobId), options);
};
