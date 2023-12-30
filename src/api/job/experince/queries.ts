import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllExperience, getExperienceById } from './requests';
import type { IExperience, IGetALlExperience } from './type';

export const useGetAllExperienceQuery = (
  params: any,
  options?: UseQueryOptions<IGetALlExperience, AxiosError, IGetALlExperience, any>
) => {
  return useQuery(['experience', params], () => getAllExperience(params), options);
};

export const useGetExperienceById = (
  experienceId: number,
  options?: UseQueryOptions<IExperience, AxiosError, IExperience, any>
) => {
  return useQuery(['experience', experienceId], () => getExperienceById(experienceId), options);
};
