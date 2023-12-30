import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { SpecialStatusSchema } from '@/validations/specialized-equipment/status';

import { deleteSpecialStatus, newSpecialStatus, updateSpecialStatus } from './requests';
import type { ISpecialStatus } from './type';

export const useNewSpecialStatus = (options?: UseMutationOptions<any, AxiosError, SpecialStatusSchema>) => {
  return useMutation(newSpecialStatus, options);
};
export const useUpdateSpecialStatus = (
  options?: UseMutationOptions<
    ISpecialStatus,
    AxiosError,
    { specialStatusId: number; specialStatus: SpecialStatusSchema }
  >
) => {
  return useMutation(updateSpecialStatus, options);
};
export const useDeleteSpecialStatus = (options?: UseMutationOptions<ISpecialStatus, AxiosError, number>) => {
  return useMutation(deleteSpecialStatus, options);
};
