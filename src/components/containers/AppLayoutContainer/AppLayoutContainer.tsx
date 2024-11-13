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
      {children}
      <AppFooter />
    </>
  );
};