import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Publicamas',
    default: 'Publicamas - Vende más, compra mejor',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>
          <div className="min-h-screen">
            {children}
          </div>
        </RootLayout>
      </body>
    </html>
  )
}
