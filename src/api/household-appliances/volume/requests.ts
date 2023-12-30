import { request } from '@/api/axios';
import type { HouseAppVolumeSchema } from '@/validations/household-appliances/volume';

import type { IHouseAppVolume } from './type';

export const getAllHouseAppVolume = async (params?: any): Promise<IHouseAppVolume[]> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/volume/',
    method: 'GET',
    params,
  });

  return data;
};

export const getHouseAppVolumeById = async (houseAppVolumeId: number): Promise<IHouseAppVolume> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/volume/${houseAppVolumeId}/`,
    method: 'GET',
  });

  return data;
};

export const newHouseAppVolume = async (HouseAppVolume: HouseAppVolumeSchema): Promise<any> => {
  const { data } = await request({
    url: '/refrigerator-airconditioner-washingmachine/volume/',
    method: 'POST',
    data: HouseAppVolume,
  });

  return data;
};

export const deleteHouseAppVolume = async (houseAppVolumeId: number): Promise<IHouseAppVolume> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/volume/${houseAppVolumeId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateHouseAppVolume = async ({
  houseAppVolumeId,
  houseAppVolume,
}: {
  houseAppVolumeId: number;
  houseAppVolume: any;
}): Promise<IHouseAppVolume> => {
  const { data } = await request({
    url: `/refrigerator-airconditioner-washingmachine/volume/${houseAppVolumeId}/`,
    method: 'PATCH',
    data: houseAppVolume,
  });

  return data;
};
