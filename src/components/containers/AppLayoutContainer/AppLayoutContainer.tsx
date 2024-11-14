'use client';
import React, { ReactNode } from 'react';
import { AppHeader } from '@/components';
import { AppFooter } from '@/components/footers';

type AppLayoutContainerProps = {
  children: ReactNode
};

export const AppLayoutContainer: React.FC<AppLayoutContainerProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <div className="py-10">
        <main>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
      <AppFooter />
    </>
  );
};