'use client';
import React, { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption, ComboboxOptions, Dialog, DialogBackdrop, DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { MobileMenu } from '@/components/Menu/MobileMenu/MobileMenu';
import { HeaderButton } from '@/components';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { HeaderButtonProps } from '@/types/ui.type';

type UserType = {}

const user = undefined;
const navigation = [
  { name: 'Inmuebles', href: '/listado/inmuebles', current: false },
  { name: 'Vehiculos', href: '/listado/vehiculos', current: false },
  { name: 'Electrónica', href: '/listado/electronica', current: false },
  { name: 'Hogar', href: '/listado/hogar', current: false },
  { name: 'Empleo', href: '/listado/empleo', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '/my-profile' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type AppHeaderProps = {}

export const AppHeader: React.FC<AppHeaderProps> = ({}) => {
  const authButtons: HeaderButtonProps[] = [{
    text: 'Ingresar',
    onClick: () => window.location.href = '/sign-in',
  }, {
    text: 'Crear cuenta',
    onClick: () => window.location.href = '/sign-up',
  }];
  const people = [
    { id: 1, name: 'Leslie Alexander', url: '#' },
    // More people...
  ];
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const filteredPeople =
    query === ''
      ? []
      : people.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase());
      });


  return (
    <>
      <Disclosure as="nav" className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Image
                  alt="Publicamas S.A."
                  height={32}
                  width={32}
                  src="https://www.publicamas.com.ar/images/logo-publicamas-mobile.png"
                  className="hidden h-8 w-auto lg:block"
                />
                <Image
                  alt="Publicamas S.A."
                  height={32}
                  width={32}
                  src="https://www.publicamas.com.ar/images/logo-publicamas-mobile.png"
                  className="block h-8 w-auto lg:hidden"
                />
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                onClick={() => setSearchBarOpen(true)}
                className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-publicamas-main-color focus:ring-offset-2"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Buscar</span>
                <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
              </button>
              <Dialog
                className="relative z-10"
                open={searchBarOpen}
                onClose={() => {
                  setSearchBarOpen(false);
                  setQuery('');
                }}
              >
                <DialogBackdrop
                  transition
                  className="fixed inset-0 bg-gray-500/25 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                  <DialogPanel
                    transition
                    className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black/5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <Combobox
                      onChange={(person) => {
                        if (person) {

                        }
                      }}
                    >
                      <ComboboxInput
                        autoFocus
                        className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 focus:ring-0 sm:text-sm"
                        placeholder="Buscar"
                        onChange={(event) => setQuery(event.target.value)}
                        onBlur={() => setQuery('')}
                      />

                      {filteredPeople.length > 0 && (
                        <ComboboxOptions static
                                         className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                          {filteredPeople.map((person) => (
                            <ComboboxOption
                              key={person.id}
                              value={person}
                              className="cursor-default select-none rounded-md px-4 py-2 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                            >
                              {person.name}
                            </ComboboxOption>
                          ))}
                        </ComboboxOptions>
                      )}

                      {query !== '' && filteredPeople.length === 0 && (
                        <div className="px-4 py-14 text-center sm:px-14">
                          <UsersIcon className="mx-auto size-6 text-gray-400" aria-hidden="true" />
                          <p className="mt-4 text-sm text-gray-900">No people found using that search term.</p>
                        </div>
                      )}
                    </Combobox>
                  </DialogPanel>
                </div>
              </Dialog>
              {authButtons.map((element: HeaderButtonProps) => (
                <HeaderButton text={element.text} action={element.onClick} />
              ))}
              {user && (
                <>
                  <button
                    type="button"
                    className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Ver notificaciones</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Ver favoritos</span>
                    <StarIcon aria-hidden="true" className="size-6" />
                  </button>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton
                        className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Abrir menu de usuario</span>

                        {/*<img alt="" src={user.imageUrl} className="size-8 rounded-full" />*/}
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </>
              )}
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setSearchBarOpen(true)}
                className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-publicamas-main-color focus:ring-offset-2"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Buscar</span>
                <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
              </button>
              <DisclosureButton
                className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Abrir menu principal</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>
        <MobileMenu user={user} userNavigation={userNavigation} navigation={navigation} authButtonProps={authButtons} />
      </Disclosure>
    </>
  );
};