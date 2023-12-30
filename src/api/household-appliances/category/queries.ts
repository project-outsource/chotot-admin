import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllHouseAppCategory, getHouseAppCategoryById } from './requests';
import type { IGetALlIHouseAppCategory, IHouseAppCategory } from './type';

export const useGetAllHouseAppCategoryQuery = (
  params: any,
  options?: UseQueryOptions<IGetALlIHouseAppCategory, AxiosError, IGetALlIHouseAppCategory, any>
) => {
  return useQuery(['HouseAppCategory', params], () => getAllHouseAppCategory(params), options);
};

export const useGetHouseAppCategoryById = (
  HouseAppCategoryId: number,
  options?: UseQueryOptions<IHouseAppCategory, AxiosError, IHouseAppCategory, any>
) => {
  return useQuery(['HouseAppCategory', HouseAppCategoryId], () => getHouseAppCategoryById(HouseAppCategoryId), options);
};
