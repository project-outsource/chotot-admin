import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { SpecialGuaranteeSchema } from '@/validations/specialized-equipment/guarantee';

import { deleteSpecialGuarantee, newSpecialGuarantee, updateSpecialGuarantee } from './requests';
import type { ISpecialGuarantee } from './type';

export const useNewSpecialGuarantee = (options?: UseMutationOptions<any, AxiosError, SpecialGuaranteeSchema>) => {
  return useMutation(newSpecialGuarantee, options);
};
export const useUpdateSpecialGuarantee = (
  options?: UseMutationOptions<ISpecialGuarantee, AxiosError, { specialGuaranteeId: number; specialGuarantee: any }>
) => {
  return useMutation(updateSpecialGuarantee, options);
};
export const useDeleteSpecialGuarantee = (options?: UseMutationOptions<ISpecialGuarantee, AxiosError, number>) => {
  return useMutation(deleteSpecialGuarantee, options);
};
