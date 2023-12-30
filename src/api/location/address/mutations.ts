import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { LocationAddressSchema } from '@/validations/location/address';

import { deleteLocationAddress, newLocationAddress, updateLocationAddress } from './requests';
import type { ILocationAddress } from './type';

export const useNewLocationAddress = (options?: UseMutationOptions<any, AxiosError, LocationAddressSchema>) => {
  return useMutation(newLocationAddress, options);
};
export const useUpdateLocationAddress = (
  options?: UseMutationOptions<ILocationAddress, AxiosError, { locationAddressId: number; locationAddress: any }>
) => {
  return useMutation(updateLocationAddress, options);
};
export const useDeleteLocationAddress = (options?: UseMutationOptions<ILocationAddress, AxiosError, number>) => {
  return useMutation(deleteLocationAddress, options);
};
