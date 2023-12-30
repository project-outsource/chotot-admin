import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllPaymentType, getPaymentTypeById } from './requests';
import type { IGetALlPaymentType, IPaymentType } from './type';

export const useGetAllPaymentTypes = (
  params?: any,
  options?: UseQueryOptions<IGetALlPaymentType, AxiosError, IGetALlPaymentType, any>
) => {
  return useQuery(['paymentType', params], () => getAllPaymentType(params), options);
};

export const useGetPaymentTypeById = (
  paymentType: number,
  options?: UseQueryOptions<IPaymentType, AxiosError, IPaymentType, any>
) => {
  return useQuery(['paymentType', paymentType], () => getPaymentTypeById(paymentType), options);
};
