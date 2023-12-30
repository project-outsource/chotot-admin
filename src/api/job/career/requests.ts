import { request } from '@/api/axios';
import type { CareerSchema } from '@/validations/job/career';

import type { ICareer, IGetAllUserParams } from './type';

export const getAllCareer = async (params?: IGetAllUserParams): Promise<ICareer[]> => {
  const { data } = await request({
    url: '/job/career/',
    method: 'GET',
    params,
  });

  return data;
};

export const getCareerById = async (careerId: number): Promise<ICareer> => {
  const { data } = await request({
    url: `/job/career/${careerId}/`,
    method: 'GET',
  });

  return data;
};

export const newCareer = async (career: CareerSchema): Promise<any> => {
  const { data } = await request({
    url: '/job/career/',
    method: 'POST',
    data: career,
  });

  return data;
};

export const deleteCareer = async (careerId: number): Promise<ICareer> => {
  const { data } = await request({
    url: `/job/career/${careerId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateCareer = async ({ careerId, career }: { careerId: number; career: any }): Promise<ICareer> => {
  const { data } = await request({
    url: `/job/career/${careerId}/`,
    method: 'PATCH',
    data: career,
  });

  return data;
};
