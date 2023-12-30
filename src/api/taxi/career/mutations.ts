import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { CareerSchema } from '@/validations/job/career';

import { deleteCareer, newCareer, updateCareer } from './requests';
import type { ICareer } from './type';

export const useNewCareer = (options?: UseMutationOptions<any, AxiosError, CareerSchema>) => {
  return useMutation(newCareer, options);
};
export const useUpdateCareer = (
  options?: UseMutationOptions<ICareer, AxiosError, { careerId: number; career: any }>
) => {
  return useMutation(updateCareer, options);
};
export const useDeleteCareer = (options?: UseMutationOptions<ICareer, AxiosError, number>) => {
  return useMutation(deleteCareer, options);
};
