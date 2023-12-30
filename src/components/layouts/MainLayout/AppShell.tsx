import type { ReactNode } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';
import type { FCC } from '@/types';

interface Props {
  sidebar?: ReactNode;
}

const AppShell: FCC<Props> = ({ sidebar, children }) => {
  return (
    <div className="container-fluid">
      <div>{sidebar}</div>
      <div className={cn('transition-all md:pl-[var(--sidebar-w)]', {})}>{children}</div>
    </div>
  );
};

export default AppShell;
