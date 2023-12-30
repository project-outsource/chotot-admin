import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { IHouseAppStatus } from '../type';
import { getAllHouseAppStatus, getHouseAppStatusById } from './requests';

export const useGetAllHouseAppStatusQuery = (
  params: any,
  options?: UseQueryOptions<IHouseAppStatus[], AxiosError, IHouseAppStatus[], any>
) => {
  return useQuery(['HouseAppStatus', params], () => getAllHouseAppStatus(params), options);
};

export const useGetHouseAppStatusById = (
  houseAppStatusId: number,
  options?: UseQueryOptions<IHouseAppStatus, AxiosError, IHouseAppStatus, any>
) => {
  return useQuery(['HouseAppStatus', houseAppStatusId], () => getHouseAppStatusById(houseAppStatusId), options);
};
