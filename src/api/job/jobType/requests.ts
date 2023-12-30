import { request } from '@/api/axios';
import type { JobTypeSchema } from '@/validations/job/type';

import type { IJobType } from './type';

export const getAllJobType = async (params?: any): Promise<IJobType[]> => {
  const { data } = await request({
    url: '/job/type-of-work/',
    method: 'GET',
    params,
  });

  return data;
};

export const getJobTypeById = async (jobTypeId: number): Promise<IJobType> => {
  const { data } = await request({
    url: `/job/type-of-work/${jobTypeId}/`,
    method: 'GET',
  });

  return data;
};

export const newJobType = async (jobType: JobTypeSchema): Promise<any> => {
  const { data } = await request({
    url: '/job/type-of-work/',
    method: 'POST',
    data: jobType,
  });

  return data;
};

export const deleteJobType = async (jobTypeId: number): Promise<IJobType> => {
  const { data } = await request({
    url: `/job/type-of-work/${jobTypeId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateJobType = async ({ jobTypeId, jobType }: { jobTypeId: number; jobType: any }): Promise<IJobType> => {
  const { data } = await request({
    url: `/job/type-of-work/${jobTypeId}/`,
    method: 'PATCH',
    data: jobType,
  });

  return data;
};
