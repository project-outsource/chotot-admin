import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { HouseAppVolumeSchema } from '@/validations/household-appliances/volume';

import { deleteHouseAppVolume, newHouseAppVolume, updateHouseAppVolume } from './requests';
import type { IHouseAppVolume } from './type';

export const useNewHouseAppVolume = (options?: UseMutationOptions<any, AxiosError, HouseAppVolumeSchema>) => {
  return useMutation(newHouseAppVolume, options);
};
export const useUpdateHouseAppVolume = (
  options?: UseMutationOptions<IHouseAppVolume, AxiosError, { houseAppVolumeId: number; houseAppVolume: any }>
) => {
  return useMutation(updateHouseAppVolume, options);
};
export const useDeleteHouseAppVolume = (options?: UseMutationOptions<IHouseAppVolume, AxiosError, number>) => {
  return useMutation(deleteHouseAppVolume, options);
};
