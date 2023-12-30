import { request } from '@/api/axios';
import type { HouseAppStatusSchema } from '@/validations/household-appliances/status';

import type { IHouseAppStatus } from '../type';

export const getAllHouseAppStatus = async (params?: any): Promise<IHouseAppStatus[]> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/usage-status/',
    method: 'GET',
    params,
  });

  return data;
};

export const getHouseAppStatusById = async (houseAppStatusId: number): Promise<IHouseAppStatus> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/usage-status/${houseAppStatusId}/`,
    method: 'GET',
  });

  return data;
};

export const newHouseAppStatus = async (HouseAppStatus: HouseAppStatusSchema): Promise<any> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/usage-status/',
    method: 'POST',
    data: HouseAppStatus,
  });

  return data;
};

export const deleteHouseAppStatus = async (houseAppStatusId: number): Promise<IHouseAppStatus> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/usage-status/${houseAppStatusId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateHouseAppStatus = async ({
  houseAppStatusId,
  houseAppStatus,
}: {
  houseAppStatusId: number;
  houseAppStatus: HouseAppStatusSchema;
}): Promise<IHouseAppStatus> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/usage-status/${houseAppStatusId}/`,
    method: 'PATCH',
    data: houseAppStatus,
  });

  return data;
};
