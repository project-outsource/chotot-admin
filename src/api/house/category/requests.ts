import { request } from '@/api/axios';
import type { HouseCategorySchema } from '@/validations/house/category';

import type { IGetALlHouseCategory, IHouseCategory } from './type';

export const getAllHouseCategory = async (params?: any): Promise<IGetALlHouseCategory> => {
  const { data } = await request({
    url: '/good-house/category/',
    method: 'GET',
    params,
  });

  return data;
};

export const getHouseCategoryById = async (houseCategoryId: number): Promise<IHouseCategory> => {
  const { data } = await request({
    url: `/good-house/category/${houseCategoryId}/`,
    method: 'GET',
  });

  return data;
};

export const newHouseCategory = async (houseCategory: HouseCategorySchema): Promise<any> => {
  const { data } = await request({
    url: '/good-house/category/',
    method: 'POST',
    data: houseCategory,
  });

  return data;
};

export const deleteHouseCategory = async (houseCategoryId: number): Promise<IHouseCategory> => {
  const { data } = await request({
    url: `/good-house/category/${houseCategoryId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateHouseCategory = async ({
  houseCategoryId,
  houseCategory,
}: {
  houseCategoryId: number;
  houseCategory: any;
}): Promise<IHouseCategory> => {
  const { data } = await request({
    url: `/good-house/category/${houseCategoryId}/`,
    method: 'PATCH',
    data: houseCategory,
  });

  return data;
};
