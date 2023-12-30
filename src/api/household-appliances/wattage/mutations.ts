import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { HouseAppWattageSchema } from '@/validations/household-appliances/wattage';

import { deleteHouseAppWattage, newHouseAppWattage, updateHouseAppWattage } from './requests';
import type { IHouseAppWattage } from './type';

export const useNewHouseAppWattage = (options?: UseMutationOptions<any, AxiosError, HouseAppWattageSchema>) => {
  return useMutation(newHouseAppWattage, options);
};
export const useUpdateHouseAppWattage = (
  options?: UseMutationOptions<IHouseAppWattage, AxiosError, { houseAppWattageId: number; houseAppWattage: any }>
) => {
  return useMutation(updateHouseAppWattage, options);
};
export const useDeleteHouseAppWattage = (options?: UseMutationOptions<IHouseAppWattage, AxiosError, number>) => {
  return useMutation(deleteHouseAppWattage, options);
};
