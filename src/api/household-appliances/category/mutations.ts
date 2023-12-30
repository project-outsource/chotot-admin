import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { HouseAppCategorySchema } from '@/validations/household-appliances/category';

import { deleteHouseAppCategory, newHouseAppCategory, updateHouseAppCategory } from './requests';
import type { IHouseAppCategory } from './type';

export const useNewHouseAppCategory = (options?: UseMutationOptions<any, AxiosError, HouseAppCategorySchema>) => {
  return useMutation(newHouseAppCategory, options);
};
export const useUpdateHouseAppCategory = (
  options?: UseMutationOptions<
    IHouseAppCategory,
    AxiosError,
    { houseAppCategoryId: number; houseAppCategory: HouseAppCategorySchema }
  >
) => {
  return useMutation(updateHouseAppCategory, options);
};
export const useDeleteHouseAppCategory = (options?: UseMutationOptions<IHouseAppCategory, AxiosError, number>) => {
  return useMutation(deleteHouseAppCategory, options);
};
