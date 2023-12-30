import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { ExperienceSchema } from '@/validations/job/experience';

import { deleteExperience, newExperience, updateExperience } from './requests';
import type { IExperience } from './type';

export const useNewExperience = (options?: UseMutationOptions<any, AxiosError, ExperienceSchema>) => {
  return useMutation(newExperience, options);
};
export const useUpdateExperience = (
  options?: UseMutationOptions<IExperience, AxiosError, { experienceId: number; experience: ExperienceSchema }>
) => {
  return useMutation(updateExperience, options);
};
export const useDeleteExperience = (options?: UseMutationOptions<IExperience, AxiosError, number>) => {
  return useMutation(deleteExperience, options);
};
