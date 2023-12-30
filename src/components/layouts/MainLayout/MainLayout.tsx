import type { ReactNode } from 'react';
import React from 'react';

import type { FCC } from '@/types';

import AppShell from './AppShell';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

interface Props {
  children: ReactNode;
}

const MainLayout: FCC<Props> = ({ children }) => {
  return (
    <div className="overflow-clip">
      <Header />
      <AppShell sidebar={<Sidebar />}>
        <main className="min-h-layout mt-20">{children}</main>
        <Footer />
      </AppShell>
    </div>
  );
};

export default MainLayout;
