import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import Router from 'next/router';
import { toast } from 'sonner';

import { env } from '@/lib/const';
import { useAdminStore } from '@/stores';
import { ROUTE } from '@/types';

export const request = axios.create({
  baseURL: env.API_URL,
});

const handleSuccess = (res: AxiosResponse) => {
  return res.data;
};

const handleError = async (error: any) => {
  const originalRequest = error.config!;
  const data = error?.response?.data as any;

  if (data?.meta?.code === 401) {
    toast.error('Bạn không có quyền truy cập vào hệ thống!');
    Router.replace(ROUTE.SIGN_IN);
  }

  return Promise.reject(data?.meta || data || error);
};

request.interceptors.response.use(handleSuccess, handleError);

request.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // const token = useAdminStore.getState().accessToken;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzNjg0MTA2LCJpYXQiOjE3MDM1OTc3MDYsImp0aSI6ImUxOGI3MDU3YjU1YzRhMDNiMmZiOGE4ODljY2Y4OWM1IiwidXNlcl9pZCI6MX0.qv4-df-6iZJ64IZVlkmzW-6QLwgFfAlEUSd-wSldxfk';
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);
