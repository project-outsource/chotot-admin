import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllHouseAppWattage, getHouseAppWattageById } from './requests';
import type { IHouseAppWattage } from './type';

export const useGetAllHouseAppWattageQuery = (
  params: any,
  options?: UseQueryOptions<IHouseAppWattage[], AxiosError, IHouseAppWattage[], any>
) => {
  return useQuery(['HouseAppWattage', params], () => getAllHouseAppWattage(params), options);
};

export const useGetHouseAppWattageById = (
  houseAppWattageId: number,
  options?: UseQueryOptions<IHouseAppWattage, AxiosError, IHouseAppWattage, any>
) => {
  return useQuery(['HouseAppWattage', houseAppWattageId], () => getHouseAppWattageById(houseAppWattageId), options);
};
