import { request } from '@/api/axios';
import type { SpecialStatusSchema } from '@/validations/specialized-equipment/status';

import type { ISpecialStatus } from './type';

export const getAllSpecialStatus = async (params?: any): Promise<ISpecialStatus[]> => {
  const { data } = await request({
    url: '/machinery-equipment/usage-status/',
    method: 'GET',
    params,
  });

  return data;
};

export const getSpecialStatusById = async (specialStatusId: number): Promise<ISpecialStatus> => {
  const { data } = await request({
    url: `/machinery-equipment/usage-status/${specialStatusId}/`,
    method: 'GET',
  });

  return data;
};

export const newSpecialStatus = async (SpecialStatus: SpecialStatusSchema): Promise<any> => {
  const { data } = await request({
    url: '/machinery-equipment/usage-status/',
    method: 'POST',
    data: SpecialStatus,
  });

  return data;
};

export const deleteSpecialStatus = async (specialStatusId: number): Promise<ISpecialStatus> => {
  const { data } = await request({
    url: `/machinery-equipment/usage-status/${specialStatusId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateSpecialStatus = async ({
  specialStatusId,
  specialStatus,
}: {
  specialStatusId: number;
  specialStatus: SpecialStatusSchema;
}): Promise<ISpecialStatus> => {
  const { data } = await request({
    url: `/machinery-equipment/usage-status/${specialStatusId}/`,
    method: 'PATCH',
    data: specialStatus,
  });

  return data;
};
