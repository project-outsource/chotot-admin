import { request } from '@/api/axios';
import type { LocationSchema } from '@/validations/location/area';

import type { ILocation } from './type';

export const getAllLocation = async (params?: any): Promise<ILocation[]> => {
  const { data } = await request({
    url: '/location/',
    method: 'GET',
    params,
  });

  return data;
};

export const getLocationById = async (locationId: number): Promise<ILocation> => {
  const { data } = await request({
    url: `/location/${locationId}/`,
    method: 'GET',
  });

  return data;
};

export const newLocation = async (Location: LocationSchema): Promise<any> => {
  const { data } = await request({
    url: '/location/',
    method: 'POST',
    data: Location,
  });

  return data;
};

export const deleteLocation = async (locationId: number): Promise<ILocation> => {
  const { data } = await request({
    url: `/location/${locationId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateLocation = async ({
  locationId,
  location,
}: {
  locationId: number;
  location: LocationSchema;
}): Promise<ILocation> => {
  const { data } = await request({
    url: `/location/${locationId}/`,
    method: 'PATCH',
    data: location,
  });

  return data;
};
