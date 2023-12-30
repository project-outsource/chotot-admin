import { request } from '@/api/axios';

import type { IGetALlJob, IJob } from './type';

export const getAllJob = async (params?: any): Promise<IGetALlJob> => {
  const { data } = await request({
    url: '/job/items/',
    method: 'GET',
    params,
  });

  return data;
};

export const getJobById = async (jobId: number): Promise<IJob> => {
  const { data } = await request({
    url: `/job/items/${jobId}`,
    method: 'GET',
  });

  return data;
};

export const newJob = async (job: any): Promise<IJob> => {
  const { data } = await request({
    url: '/job/items/',
    method: 'POST',
    data: job,
  });

  return data;
};

export const deleteJob = async (jobId: number): Promise<IJob> => {
  const { data } = await request({
    url: `/job/items/${jobId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateJob = async ({ jobId, job }: { jobId: number; job: any }): Promise<IJob> => {
  const { data } = await request({
    url: `/job/items/${jobId}`,
    method: 'PATCH',
    data: job,
  });

  return data;
};
