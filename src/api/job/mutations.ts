import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { UserSchema } from '@/lib/validations/user';

import type { IUser } from '../auth';
import { updateUser } from './requests';

export const useUpdatedUser = (
  options?: UseMutationOptions<IUser, AxiosError, { userId: number; user: UserSchema }>
) => {
  return useMutation(updateUser, options);
};
