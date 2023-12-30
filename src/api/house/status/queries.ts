import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllHouseStatus, getHouseStatusById } from './requests';
import type { IGetALlHouseStatus, IHouseStatus } from './type';

export const useGetAllHouseStatusQuery = (
  params: any,
  options?: UseQueryOptions<IGetALlHouseStatus, AxiosError, IGetALlHouseStatus, any>
) => {
  return useQuery(['HouseStatus', params], () => getAllHouseStatus(params), options);
};

export const useGetHouseStatusById = (
  houseStatusId: number,
  options?: UseQueryOptions<IHouseStatus, AxiosError, IHouseStatus, any>
) => {
  return useQuery(['HouseStatus', houseStatusId], () => getHouseStatusById(houseStatusId), options);
};
