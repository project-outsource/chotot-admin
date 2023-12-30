import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { HouseAppMassSchema } from '@/validations/household-appliances/mass';

import { deleteHouseAppMass, newHouseAppMass, updateHouseAppMass } from './requests';
import type { IHouseAppMass } from './type';

export const useNewHouseAppMass = (options?: UseMutationOptions<any, AxiosError, HouseAppMassSchema>) => {
  return useMutation(newHouseAppMass, options);
};
export const useUpdateHouseAppMass = (
  options?: UseMutationOptions<IHouseAppMass, AxiosError, { houseAppMassId: number; houseAppMass: any }>
) => {
  return useMutation(updateHouseAppMass, options);
};
export const useDeleteHouseAppMass = (options?: UseMutationOptions<IHouseAppMass, AxiosError, number>) => {
  return useMutation(deleteHouseAppMass, options);
};
