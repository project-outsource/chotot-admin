import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllHouseAppMass, getHouseAppMassById } from './requests';
import type { IHouseAppMass } from './type';

export const useGetAllHouseAppMassQuery = (
  params: any,
  options?: UseQueryOptions<IHouseAppMass[], AxiosError, IHouseAppMass[], any>
) => {
  return useQuery(['HouseAppMass', params], () => getAllHouseAppMass(params), options);
};

export const useGetHouseAppMassById = (
  houseAppMassId: number,
  options?: UseQueryOptions<IHouseAppMass, AxiosError, IHouseAppMass, any>
) => {
  return useQuery(['HouseAppMass', houseAppMassId], () => getHouseAppMassById(houseAppMassId), options);
};
