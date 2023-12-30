import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { HouseCategorySchema } from '@/validations/house/category';

import { deleteHouseCategory, newHouseCategory, updateHouseCategory } from './requests';
import type { IHouseCategory } from './type';

export const useNewHouseCategory = (options?: UseMutationOptions<any, AxiosError, HouseCategorySchema>) => {
  return useMutation(newHouseCategory, options);
};
export const useUpdateHouseCategory = (
  options?: UseMutationOptions<IHouseCategory, AxiosError, { houseCategoryId: number; houseCategory: any }>
) => {
  return useMutation(updateHouseCategory, options);
};
export const useDeleteHouseCategory = (options?: UseMutationOptions<IHouseCategory, AxiosError, number>) => {
  return useMutation(deleteHouseCategory, options);
};
