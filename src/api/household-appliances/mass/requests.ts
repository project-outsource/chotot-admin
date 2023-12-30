import { request } from '@/api/axios';
import type { HouseAppMassSchema } from '@/validations/household-appliances/mass';

import type { IHouseAppMass } from './type';

export const getAllHouseAppMass = async (params?: any): Promise<IHouseAppMass[]> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/washing-volume/',
    method: 'GET',
    params,
  });

  return data;
};

export const getHouseAppMassById = async (houseAppMassId: number): Promise<IHouseAppMass> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/washing-volume/${houseAppMassId}/`,
    method: 'GET',
  });

  return data;
};

export const newHouseAppMass = async (HouseAppMass: HouseAppMassSchema): Promise<any> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/washing-volume/',
    method: 'POST',
    data: HouseAppMass,
  });

  return data;
};

export const deleteHouseAppMass = async (houseAppMassId: number): Promise<IHouseAppMass> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/washing-volume/${houseAppMassId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateHouseAppMass = async ({
  houseAppMassId,
  houseAppMass,
}: {
  houseAppMassId: number;
  houseAppMass: HouseAppMassSchema;
}): Promise<IHouseAppMass> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/washing-volume/${houseAppMassId}/`,
    method: 'PATCH',
    data: houseAppMass,
  });

  return data;
};
