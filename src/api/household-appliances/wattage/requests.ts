import { request } from '@/api/axios';
import type { HouseAppWattageSchema } from '@/validations/household-appliances/wattage';

import type { IHouseAppWattage } from './type';

export const getAllHouseAppWattage = async (params?: any): Promise<IHouseAppWattage[]> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/wattage/',
    method: 'GET',
    params,
  });

  return data;
};

export const getHouseAppWattageById = async (houseAppWattageId: number): Promise<IHouseAppWattage> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/wattage/${houseAppWattageId}/`,
    method: 'GET',
  });

  return data;
};

export const newHouseAppWattage = async (HouseAppWattage: HouseAppWattageSchema): Promise<any> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/wattage/',
    method: 'POST',
    data: HouseAppWattage,
  });

  return data;
};

export const deleteHouseAppWattage = async (houseAppWattageId: number): Promise<IHouseAppWattage> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/wattage/${houseAppWattageId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateHouseAppWattage = async ({
  houseAppWattageId,
  houseAppWattage,
}: {
  houseAppWattageId: number;
  houseAppWattage: HouseAppWattageSchema;
}): Promise<IHouseAppWattage> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/wattage/${houseAppWattageId}/`,
    method: 'PATCH',
    data: houseAppWattage,
  });

  return data;
};
