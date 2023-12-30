import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { PaymentTypeSchema } from '@/validations/job/paymentType';

import { deletePaymentType, newPaymentType, updatePaymentType } from './requests';
import type { IPaymentType } from './type';

export const useNewPaymentType = (options?: UseMutationOptions<any, AxiosError, PaymentTypeSchema>) => {
  return useMutation(newPaymentType, options);
};
export const useUpdatePaymentType = (
  options?: UseMutationOptions<IPaymentType, AxiosError, { paymentTypeId: number; paymentType: any }>
) => {
  return useMutation(updatePaymentType, options);
};
export const useDeletePaymentType = (options?: UseMutationOptions<IPaymentType, AxiosError, number>) => {
  return useMutation(deletePaymentType, options);
};
