import { useAdminStore } from '@/stores';

/**
 * * Override useSession to have more clean code
 * @returns session with isLoggedIn to check auth
 */
export const useAuth = () => {
  const store = useAdminStore.getState();
  return {
    isLoggedIn: store?.accessToken,
    user: store?.user,
  };
};
