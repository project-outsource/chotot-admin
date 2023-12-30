import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllHouseAppVolume, getHouseAppVolumeById } from './requests';
import type { IHouseAppVolume } from './type';

export const useGetAllHouseAppVolumeQuery = (
  params: any,
  options?: UseQueryOptions<IHouseAppVolume[], AxiosError, IHouseAppVolume[], any>
) => {
  return useQuery(['HouseAppVolume', params], () => getAllHouseAppVolume(params), options);
};

export const useGetHouseAppVolumeById = (
  houseAppVolumeId: number,
  options?: UseQueryOptions<IHouseAppVolume, AxiosError, IHouseAppVolume, any>
) => {
  return useQuery(['HouseAppVolume', houseAppVolumeId], () => getHouseAppVolumeById(houseAppVolumeId), options);
};
