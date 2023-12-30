import { request } from '@/api/axios';
import type { HouseAppCategorySchema } from '@/validations/household-appliances/category';

import type { IGetALlIHouseAppCategory, IHouseAppCategory } from './type';

export const getAllHouseAppCategory = async (params?: any): Promise<IGetALlIHouseAppCategory> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/category/',
    method: 'GET',
    params,
  });

  return data;
};

export const getHouseAppCategoryById = async (houseAppCategoryId: number): Promise<IHouseAppCategory> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/category/${houseAppCategoryId}/`,
    method: 'GET',
  });

  return data;
};

export const newHouseAppCategory = async (houseAppCategory: HouseAppCategorySchema): Promise<any> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/category/',
    method: 'POST',
    data: houseAppCategory,
  });

  return data;
};

export const deleteHouseAppCategory = async (houseAppCategoryId: number): Promise<IHouseAppCategory> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/category/${houseAppCategoryId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateHouseAppCategory = async ({
  houseAppCategoryId,
  houseAppCategory,
}: {
  houseAppCategoryId: number;
  houseAppCategory: HouseAppCategorySchema;
}): Promise<IHouseAppCategory> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/category/${houseAppCategoryId}/`,
    method: 'PATCH',
    data: houseAppCategory,
  });

  return data;
};
