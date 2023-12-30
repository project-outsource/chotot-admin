import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { ILoginResponse, IUser } from '@/api/auth';

export interface IAdminStore {
  user: IUser;
  accessToken: string;
  setStore: (data: ILoginResponse) => void;
  setUser: (data: IUser) => void;
  setAccessToken: (data: string) => void;
  logout: () => void;
}

const useBaseAdminStore = create<IAdminStore>()(
  persist(
    (set) => ({
      accessToken: '',
      user: {} as IUser,
      setStore: (data) => set((state) => data),
      setUser: (data) => set((state) => ({ ...state, user: data })),
      setAccessToken: (data) => set((state) => ({ ...state, accessToken: data })),
      logout: () => set(() => ({ accessToken: '', user: {} as IUser })),
    }),
    {
      name: 'admin-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAdminStore = createSelectorFunctions(useBaseAdminStore);
