import Link from 'next/link';
import React from 'react';

import Logo from '@/components/Logo';
import { type NextPageWithLayout, ROUTE } from '@/types';

import FormLogin from './components/FormLogin';

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <header className="h-header bg-card relative left-0 right-0 top-0 z-50 flex w-full items-center justify-between border-b py-4 sm:fixed">
        <div className={'flex w-full items-center justify-center px-4'}>
          <Link href={ROUTE.SIGN_IN}>
            <Logo />
          </Link>
        </div>
      </header>
      <FormLogin />
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = (page) => <>{page}</>;
