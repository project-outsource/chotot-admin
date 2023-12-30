import { request } from '@/api/axios';
import type { HouseAppCategorySchema } from '@/validations/household-appliances/category';

import type { IHouseAppGuarantee } from './type';

export const getAllHouseAppGuarantee = async (params?: any): Promise<IHouseAppGuarantee[]> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/guarantee/',
    method: 'GET',
    params,
  });

  return data;
};

export const getHouseAppGuaranteeById = async (guaranteeId: number): Promise<IHouseAppGuarantee> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/guarantee/${guaranteeId}/`,
    method: 'GET',
  });

  return data;
};

export const newHouseAppGuarantee = async (Guarantee: HouseAppCategorySchema): Promise<any> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/guarantee/',
    method: 'POST',
    data: Guarantee,
  });

  return data;
};

export const deleteHouseAppGuarantee = async (guaranteeId: number): Promise<IHouseAppGuarantee> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/guarantee/${guaranteeId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateHouseAppGuarantee = async ({
  houseAppGuaranteeId,
  houseAppGuarantee,
}: {
  houseAppGuaranteeId: number;
  houseAppGuarantee: any;
}): Promise<IHouseAppGuarantee> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/guarantee/${houseAppGuaranteeId}/`,
    method: 'PATCH',
    data: houseAppGuarantee,
  });

  return data;
};
