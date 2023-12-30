import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { AdminSchema } from '@/lib/validations/admin';
import type { UserSchema } from '@/lib/validations/user';

import type { IUser } from '../auth';
import { createAdmin, deleteAdmin, updateAdmin } from './requests';

export const useUpdateAdmin = (
  options?: UseMutationOptions<IUser, AxiosError, { adminId: number; admin: Partial<UserSchema> }>
) => {
  return useMutation(updateAdmin, options);
};

export const useCreateAdmin = (options?: UseMutationOptions<IUser, AxiosError, AdminSchema>) => {
  return useMutation(createAdmin, options);
};

export const useDeleteAdmin = (options?: UseMutationOptions<IUser, AxiosError, number>) => {
  return useMutation(deleteAdmin, options);
};
