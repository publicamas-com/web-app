import React from 'react';
import clsx from 'clsx';
import '@/styles/tailwind.css'
import {Inter, Lexend} from 'next/font/google'
import SessionProviderWrapper from '@/app/SessionProviderWrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
    <body className="flex h-full flex-col">
    <SessionProviderWrapper>
      {children}
    </SessionProviderWrapper>
    </body>
    </html>
  );
}