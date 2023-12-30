import { request } from '@/api/axios';
import type { SpecialGuaranteeSchema } from '@/validations/specialized-equipment/guarantee';

import type { ISpecialGuarantee } from './type';

export const getAllSpecialGuarantee = async (params?: any): Promise<ISpecialGuarantee[]> => {
  const { data } = await request({
    url: '/machinery-equipment/guarantee/',
    method: 'GET',
    params,
  });

  return data;
};

export const getSpecialGuaranteeById = async (specialGuaranteeId: number): Promise<ISpecialGuarantee> => {
  const { data } = await request({
    url: `/machinery-equipment/guarantee/${specialGuaranteeId}/`,
    method: 'GET',
  });

  return data;
};

export const newSpecialGuarantee = async (SpecialGuarantee: SpecialGuaranteeSchema): Promise<any> => {
  const { data } = await request({
    url: '/machinery-equipment/guarantee/',
    method: 'POST',
    data: SpecialGuarantee,
  });

  return data;
};

export const deleteSpecialGuarantee = async (specialGuaranteeId: number): Promise<ISpecialGuarantee> => {
  const { data } = await request({
    url: `/machinery-equipment/guarantee/${specialGuaranteeId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updateSpecialGuarantee = async ({
  specialGuaranteeId,
  specialGuarantee,
}: {
  specialGuaranteeId: number;
  specialGuarantee: any;
}): Promise<ISpecialGuarantee> => {
  const { data } = await request({
    url: `/machinery-equipment/guarantee/${specialGuaranteeId}/`,
    method: 'PATCH',
    data: specialGuarantee,
  });

  return data;
};
