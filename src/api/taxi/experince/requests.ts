import { request } from '@/api/axios';
import type { ExperienceSchema } from '@/validations/job/experience';

import type { IExperience, IGetALlExperience } from './type';

export const getAllExperience = async (params?: any): Promise<IGetALlExperience> => {
  const { data } = await request({
    url: '/job/experience/',
    method: 'GET',
    params,
  });

  return data;
};

export const getExperienceById = async (experienceId: number): Promise<IExperience> => {
  const { data } = await request({
    url: `/job/experience/${experienceId}/`,
    method: 'GET',
  });

  return data;
};

export const newExperience = async (experience: ExperienceSchema): Promise<any> => {
  const { data } = await request({
    url: '/job/experience/',
    method: 'POST',
    data: experience,
  });

  return data;
};

export const deleteExperience = async (experienceId: number): Promise<IExperience> => {
  const { data } = await request({
    url: `/job/experience/${experienceId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateExperience = async ({
  experienceId,
  experience,
}: {
  experienceId: number;
  experience: ExperienceSchema;
}): Promise<IExperience> => {
  const { data } = await request({
    url: `/job/experience/${experienceId}/`,
    method: 'PATCH',
    data: experience,
  });

  return data;
};
