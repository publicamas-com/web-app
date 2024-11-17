import { DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { BellIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import React from 'react';

type MobileMenuProps = {
  navigation: any[];
  userNavigation:any[];
  user:any;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navigation, userNavigation, user}) => {
  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
              'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
      <div className="border-t border-gray-200 pb-3 pt-4">
        <div className="flex items-center px-4">
          <div className="shrink-0">
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Ingresar
              </a>
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Crear cuenta
              </a>
            </div>
            {/*TODO uncomment this*/}
            {/*<img alt="" src={user.imageUrl} className="size-10 rounded-full" />*/}
          </div>
          <div className="ml-3">
            {/*TODO uncomment this*/}
            {/*<div className="text-base font-medium text-gray-800">{user.name}</div>*/}
            {/*<div className="text-sm font-medium text-gray-500">{user.email}</div>*/}
          </div>
          <button
            type="button"
            className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>
          <button
            type="button"
            className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Ver carrito</span>
            <ShoppingCartIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          {userNavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </div>
    </DisclosurePanel>
  );
};