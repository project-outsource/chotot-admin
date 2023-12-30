import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { CareerSchema } from '@/validations/job/career';

import { deleteJobType, newJobType, updateJobType } from './requests';
import type { IJobType } from './type';

export const useNewJobType = (options?: UseMutationOptions<any, AxiosError, CareerSchema>) => {
  return useMutation(newJobType, options);
};
export const useUpdateJobType = (
  options?: UseMutationOptions<IJobType, AxiosError, { jobTypeId: number; jobType: any }>
) => {
  return useMutation(updateJobType, options);
};
export const useDeleteJobType = (options?: UseMutationOptions<IJobType, AxiosError, number>) => {
  return useMutation(deleteJobType, options);
};
