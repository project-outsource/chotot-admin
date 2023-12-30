import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { HouseAppStatusSchema } from '@/validations/household-appliances/status';

import type { IHouseAppStatus } from '../type';
import { deleteHouseAppStatus, newHouseAppStatus, updateHouseAppStatus } from './requests';

export const useNewHouseAppStatus = (options?: UseMutationOptions<any, AxiosError, HouseAppStatusSchema>) => {
  return useMutation(newHouseAppStatus, options);
};
export const useUpdateHouseAppStatus = (
  options?: UseMutationOptions<
    IHouseAppStatus,
    AxiosError,
    { houseAppStatusId: number; houseAppStatus: HouseAppStatusSchema }
  >
) => {
  return useMutation(updateHouseAppStatus, options);
};
export const useDeleteHouseAppStatus = (options?: UseMutationOptions<IHouseAppStatus, AxiosError, number>) => {
  return useMutation(deleteHouseAppStatus, options);
};
