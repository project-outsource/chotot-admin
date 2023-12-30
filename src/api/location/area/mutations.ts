import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { LocationSchema } from '@/validations/location/area';

import { deleteLocation, newLocation, updateLocation } from './requests';
import type { ILocation } from './type';

export const useNewLocation = (options?: UseMutationOptions<any, AxiosError, LocationSchema>) => {
  return useMutation(newLocation, options);
};
export const useUpdateLocation = (
  options?: UseMutationOptions<ILocation, AxiosError, { locationId: number; location: LocationSchema }>
) => {
  return useMutation(updateLocation, options);
};
export const useDeleteLocation = (options?: UseMutationOptions<ILocation, AxiosError, number>) => {
  return useMutation(deleteLocation, options);
};
