import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { IGetAllUserParams } from '../type';
import { getAllLocationAddress, getLocationAddressById } from './requests';
import type { ILocationAddress } from './type';

export const useGetAllLocationAddressQuery = (
  params: IGetAllUserParams,
  options?: UseQueryOptions<ILocationAddress[], AxiosError, ILocationAddress[], any>
) => {
  return useQuery(['LocationAddress', params], () => getAllLocationAddress(params), options);
};

export const useGetLocationAddressById = (
  LocationAddressId: number,
  options?: UseQueryOptions<ILocationAddress, AxiosError, ILocationAddress, any>
) => {
  return useQuery(['LocationAddress', LocationAddressId], () => getLocationAddressById(LocationAddressId), options);
};
