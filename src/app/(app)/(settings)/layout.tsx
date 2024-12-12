"use client";
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import {
  DocumentIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon, HeartIcon, StarIcon, HandRaisedIcon, CreditCardIcon,
} from '@heroicons/react/24/outline';

const secondaryNavigation = [
  { name: 'Mi perfil', href: '/mi-perfil', icon: UserCircleIcon, current: true },
  { name: 'Preguntas recibidas', href: '/preguntas-recibidas', icon: QuestionMarkCircleIcon, current: false },
  { name: 'Crear aviso', href: '/mis-avisos', icon: DocumentIcon, current: false },
  { name: 'Mis avisos', href: '/mis-avisos', icon: DocumentIcon, current: false },
  { name: 'Mis favoritos', href: '/mis-favoritos', icon: HeartIcon, current: false },
  { name: 'Mis ventas', href: '/mis-ventas', icon: HandRaisedIcon, current: false },
  { name: 'Mis pagos', href: '/mis-pagos', icon: DocumentIcon, current: false },
  { name: 'Mis compras', href: '/mis-compras', icon: CreditCardIcon, current: false },
  { name: 'Mi reputacion', href: '/mi-reputacion', icon: StarIcon, current: false },
];

function classNames(...classes: (string | boolean | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const SettingsLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname();

  return (
    <div className="mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
      <aside
        className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
        <nav className="flex-none px-4 sm:px-6 lg:px-0">
          <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? 'bg-gray-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                    'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm/6 font-semibold',
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={classNames(
                      pathname === item.href ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                      'size-6 shrink-0',
                    )}
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
        {children}
      </main>
    </div>
);
};
export default SettingsLayout;