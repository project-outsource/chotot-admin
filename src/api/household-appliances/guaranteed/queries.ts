import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { getAllHouseAppGuarantee, getHouseAppGuaranteeById } from './requests';
import type { IHouseAppGuarantee } from './type';

export const useGetAllHouseAppGuaranteeQueryQuery = (
  params: any,
  options?: UseQueryOptions<IHouseAppGuarantee[], AxiosError, IHouseAppGuarantee[], any>
) => {
  return useQuery(['house-app-guarantee', params], () => getAllHouseAppGuarantee(params), options);
};

export const useGetAllHouseAppGuaranteeQueryById = (
  houseAppGuaranteeId: number,
  options?: UseQueryOptions<IHouseAppGuarantee, AxiosError, IHouseAppGuarantee, any>
) => {
  return useQuery(
    ['house-app-guarantee', houseAppGuaranteeId],
    () => getHouseAppGuaranteeById(houseAppGuaranteeId),
    options
  );
};
