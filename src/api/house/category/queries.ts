import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllHouseCategory, getHouseCategoryById } from './requests';
import type { IGetALlHouseCategory, IHouseCategory } from './type';

export const useGetAllHouseCategoryQuery = (
  params: any,
  options?: UseQueryOptions<IGetALlHouseCategory, AxiosError, IGetALlHouseCategory, any>
) => {
  return useQuery(['house-category', params], () => getAllHouseCategory(params), options);
};

export const useGetHouseCategoryById = (
  houseCategoryId: number,
  options?: UseQueryOptions<IHouseCategory, AxiosError, IHouseCategory, any>
) => {
  return useQuery(['house-category', houseCategoryId], () => getHouseCategoryById(houseCategoryId), options);
};
