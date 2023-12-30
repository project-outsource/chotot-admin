import axios from 'axios';
import { env } from 'process';

import { request } from '../axios';
import type { ILoginParams, ILoginResponse, IRegisterParams, IRegisterResponse, IUser } from './types';

export const loginRequest = async (params: ILoginParams): Promise<ILoginResponse> => {
  const { data } = await request({
    url: '/api/token/',
    method: 'POST',
    data: params,
  });

  return data;
};

export const logoutRequest = async (): Promise<boolean> => {
  const { data } = await request({
    url: '/api/logout',
    method: 'POST',
  });

  return data;
};

export const refetchTokenRequest = async (): Promise<ILoginResponse> => {
  const { data } = await request({
    url: '/authentication/refresh',
    method: 'GET',
  });

  return data;
};

export const registerRequest = async (params: IRegisterParams): Promise<IRegisterResponse> => {
  const { data } = await request({
    url: '/users/',
    method: 'POST',
    data: params,
  });

  return data;
};

export const getUserProfile = async (): Promise<IUser> => {
  const { data } = await request({
    url: '/api/admin/me',
    method: 'GET',
  });
  return data;
};

export const refreshTokenRequest = async (refreshToken: string): Promise<Omit<ILoginResponse, 'refreshToken'>> => {
  const { data } = await axios.get(`${env.API_URL}/authentication/refresh`, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};
