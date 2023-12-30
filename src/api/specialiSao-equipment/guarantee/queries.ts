import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllSpecialGuarantee, getSpecialGuaranteeById } from './requests';
import type { ISpecialGuarantee } from './type';

export const useGetAllSpecialGuaranteeQuery = (
  params: any,
  options?: UseQueryOptions<ISpecialGuarantee[], AxiosError, ISpecialGuarantee[], any>
) => {
  return useQuery(['SpecialGuarantee', params], () => getAllSpecialGuarantee(params), options);
};

export const useGetSpecialGuaranteeById = (
  specialGuaranteeId: number,
  options?: UseQueryOptions<ISpecialGuarantee, AxiosError, ISpecialGuarantee, any>
) => {
  return useQuery(['SpecialGuarantee', specialGuaranteeId], () => getSpecialGuaranteeById(specialGuaranteeId), options);
};
