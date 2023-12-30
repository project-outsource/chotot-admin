import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllLocation, getLocationById } from './requests';
import type { ILocation } from './type';

export const useGetAllLocationQuery = (
  params: any,
  options?: UseQueryOptions<ILocation[], AxiosError, ILocation[], any>
) => {
  return useQuery(['Location', params], () => getAllLocation(params), options);
};

export const useGetLocationById = (
  LocationId: number,
  options?: UseQueryOptions<ILocation, AxiosError, ILocation, any>
) => {
  return useQuery(['Location', LocationId], () => getLocationById(LocationId), options);
};
