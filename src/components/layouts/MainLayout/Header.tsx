import Link from 'next/link';
import React from 'react';

import { Icons } from '@/assets/icons';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/stores';
import { ROUTE } from '@/types';

import Navbar from './Navbar';

const Header = () => {
  const open = useAppStore.use.openSideBar();
  const toggle = useAppStore.use.toggleSidebar();

  return (
    <header
      className={cn(
        'h-header relative left-0 right-0 top-0 z-50 flex w-full items-center justify-between border-b bg-[#FFBA00] py-4 sm:fixed'
      )}
    >
      <div className={'flex w-full items-center justify-between px-4'}>
        <Button className="block md:hidden" onClick={toggle} variant="ghost" size="mixin">
          {open ? <Icons.X className="text-main" /> : <Icons.menu className="w-6" />}
        </Button>

        <Link href={ROUTE.HOME}>
          <Logo />
        </Link>
        <div className="">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
