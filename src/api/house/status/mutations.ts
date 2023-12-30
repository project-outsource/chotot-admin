import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { HouseStatusSchema } from '@/validations/house/status';

import { deleteHouseStatus, newHouseStatus, updateHouseStatus } from './requests';
import type { IHouseStatus } from './type';

export const useNewHouseStatus = (options?: UseMutationOptions<any, AxiosError, HouseStatusSchema>) => {
  return useMutation(newHouseStatus, options);
};
export const useUpdateHouseStatus = (
  options?: UseMutationOptions<IHouseStatus, AxiosError, { houseStatusId: number; houseStatus: HouseStatusSchema }>
) => {
  return useMutation(updateHouseStatus, options);
};
export const useDeleteHouseStatus = (options?: UseMutationOptions<IHouseStatus, AxiosError, number>) => {
  return useMutation(deleteHouseStatus, options);
};
