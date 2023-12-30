import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { HouseAppGuaranteeSchema } from '@/validations/household-appliances/guaranteed';

import { deleteHouseAppGuarantee, newHouseAppGuarantee, updateHouseAppGuarantee } from './requests';
import type { IHouseAppGuarantee } from './type';

export const useNewHouseAppGuarantee = (options?: UseMutationOptions<any, AxiosError, HouseAppGuaranteeSchema>) => {
  return useMutation(newHouseAppGuarantee, options);
};
export const useUpdateHouseAppGuarantee = (
  options?: UseMutationOptions<IHouseAppGuarantee, AxiosError, { houseAppGuaranteeId: number; houseAppGuarantee: any }>
) => {
  return useMutation(updateHouseAppGuarantee, options);
};
export const useDeleteHouseAppGuarantee = (options?: UseMutationOptions<IHouseAppGuarantee, AxiosError, number>) => {
  return useMutation(deleteHouseAppGuarantee, options);
};
