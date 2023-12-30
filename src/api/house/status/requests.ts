import { request } from '@/api/axios';
import type { HouseStatusSchema } from '@/validations/house/status';

import type { IGetALlHouseStatus, IHouseStatus } from './type';

export const getAllHouseStatus = async (params?: any): Promise<IGetALlHouseStatus> => {
  const { data } = await request({
    url: '/good-house/interior-condition/',
    method: 'GET',
    params,
  });

  return data;
};

export const getHouseStatusById = async (houseStatusId: number): Promise<IHouseStatus> => {
  const { data } = await request({
    url: `/good-house/interior-condition/${houseStatusId}/`,
    method: 'GET',
  });

  return data;
};

export const newHouseStatus = async (houseStatus: HouseStatusSchema): Promise<any> => {
  const { data } = await request({
    url: '/good-house/interior-condition/',
    method: 'POST',
    data: houseStatus,
  });

  return data;
};

export const deleteHouseStatus = async (houseStatusId: number): Promise<IHouseStatus> => {
  const { data } = await request({
    url: `/good-house/interior-condition/${houseStatusId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateHouseStatus = async ({
  houseStatusId,
  houseStatus,
}: {
  houseStatusId: number;
  houseStatus: HouseStatusSchema;
}): Promise<IHouseStatus> => {
  const { data } = await request({
    url: `/good-house/interior-condition/${houseStatusId}/`,
    method: 'PATCH',
    data: houseStatus,
  });

  return data;
};
