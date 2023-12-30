import { request } from '@/api/axios';
import type { LocationAddressSchema } from '@/validations/location/address';

import type { ILocationAddress } from './type';

export const getAllLocationAddress = async (params?: any): Promise<ILocationAddress[]> => {
  const { data } = await request({
    url: '/location/address/',
    method: 'GET',
    params,
  });

  return data;
};

export const getLocationAddressById = async (locationAddressId: number): Promise<ILocationAddress> => {
  const { data } = await request({
    url: `/location/address/${locationAddressId}/`,
    method: 'GET',
  });

  return data;
};

export const newLocationAddress = async (LocationAddress: LocationAddressSchema): Promise<any> => {
  const { data } = await request({
    url: '/location/address/',
    method: 'POST',
    data: LocationAddress,
  });

  return data;
};

export const deleteLocationAddress = async (locationAddressId: number): Promise<ILocationAddress> => {
  const { data } = await request({
    url: `/location/address/${locationAddressId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateLocationAddress = async ({
  locationAddressId,
  locationAddress,
}: {
  locationAddressId: number;
  locationAddress: any;
}): Promise<ILocationAddress> => {
  const { data } = await request({
    url: `/location/address/${locationAddressId}/`,
    method: 'PATCH',
    data: locationAddress,
  });

  return data;
};
