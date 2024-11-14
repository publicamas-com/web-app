import React from 'react';
import clsx from 'clsx';
import '@/styles/tailwind.css';
import { Inter, Lexend } from 'next/font/google';
import SessionProviderWrapper from '@/app/SessionProviderWrapper';
import { CustomMetadata } from 'next';

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

const metadata: CustomMetadata = {
  title: {
    template: '%s - Publicamas',
    default: 'Publicamas - Vendé más, comprá mejor',
  },
  description:
    'El mejor sitio de clasificados de latinoamerica. Vendé más, comprá mejor.',
};

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
    <head>
      <title>{metadata.title.default}</title>
      <link rel="apple-touch-icon" sizes="180x180"
            href="https://www.publicamas.com.ar/images/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="16x16"
            href="https://www.publicamas.com.ar/images/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="96x96"
            href="https://www.publicamas.com.ar/images/favicons/android-chrome-96x96.png" />
      <link rel="icon" type="image/png" sizes="192x192"
            href="https://www.publicamas.com.ar/images/favicons/favicon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32"
            href="https://www.publicamas.com.ar/images/favicons/favicon-32x32.png" />
      <meta name="description" content={metadata.description} />
    </head>
    <body className="bg-white flex h-full flex-col">
    <SessionProviderWrapper>
      {children}
    </SessionProviderWrapper>
    </body>
    </html>
  );
}