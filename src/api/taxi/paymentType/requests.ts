import { request } from '@/api/axios';

import type { IGetALlPaymentType, IPaymentType } from './type';

export const getAllPaymentType = async (params?: any): Promise<IGetALlPaymentType> => {
  const { data } = await request({
    url: '/job/pay-forms/',
    method: 'GET',
    params,
  });

  return data;
};

export const getPaymentTypeById = async (id: number): Promise<IPaymentType> => {
  const { data } = await request({
    url: `/job/pay-forms/${id}`,
    method: 'GET',
  });

  return data;
};

export const newPaymentType = async (paymentType: any): Promise<IPaymentType> => {
  const { data } = await request({
    url: '/job/pay-forms/',
    method: 'POST',
    data: paymentType,
  });

  return data;
};

export const deletePaymentType = async (paymentTypeId: number): Promise<IPaymentType> => {
  const { data } = await request({
    url: `/job/pay-form/${paymentTypeId}/`,
    method: 'DELETE',
  });

  return data;
};

export const updatePaymentType = async ({
  paymentTypeId,
  paymentType,
}: {
  paymentTypeId: number;
  paymentType: any;
}): Promise<IPaymentType> => {
  const { data } = await request({
    url: `/job/pay-form/${paymentTypeId}`,
    method: 'PATCH',
    data: paymentType,
  });

  return data;
};
