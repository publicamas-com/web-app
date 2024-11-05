import React from 'react';

export function HeroSection() {
  return (
    <div className="relative bg-gray-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt=""
             className="h-full w-full object-cover object-center" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <header className="relative z-10">
        <nav aria-label="Top">
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <form>
                <div>
                  <label htmlFor="desktop-currency" className="sr-only">Currency</label>
                  <div
                    className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                    <select id="desktop-currency" name="currency"
                            className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100">
                      <option>CAD</option>
                      <option>USD</option>
                      <option>AUD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <svg className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor"
                           aria-hidden="true" data-slot="icon">
                        <path fillRule="evenodd"
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>

              <div className="flex items-center space-x-6">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">Iniciar sesion</a>
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">Crear una cuenta</a>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                           alt="" />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    <div className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-8">
                        <div className="flex">
                          <div className="relative flex">
                            <button type="button"
                                    className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out"
                                    aria-expanded="false">
                              Women
                              <span className="absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out"
                                    aria-hidden="true"></span>
                            </button>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="relative flex">
                            <button type="button"
                                    className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out"
                                    aria-expanded="false">
                              Men
                              <span className="absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out"
                                    aria-hidden="true"></span>
                            </button>
                          </div>
                          <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                          </div>
                        </div>

                        <a href="#" className="flex items-center text-sm font-medium text-white">Company</a>
                        <a href="#" className="flex items-center text-sm font-medium text-white">Stores</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center lg:hidden">
                    <button type="button" className="-ml-2 p-2 text-white">
                      <span className="sr-only">Open menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stokelinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </button>

                    <a href="#" className="ml-2 p-2 text-white">
                      <span className="sr-only">Buscar</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stokelinecap="round" strokeLinejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </a>
                  </div>

                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img src="https://tailwindui.com/plus/img/logos/mark.svg?color=white" alt=""
                         className="h-8 w-auto" />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <a href="#" className="hidden text-sm font-medium text-white lg:block">Buscar</a>

                    <div className="flex items-center lg:ml-8">
                      <a href="#" className="p-2 text-white lg:hidden">
                        <span className="sr-only">Ayuda</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stokelinecap="round" strokeLinejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                      </a>
                      <a href="#" className="hidden text-sm font-medium text-white lg:block">Ayuda</a>
                      <div className="ml-4 flow-root lg:ml-8">
                        <a href="#" className="group -m-2 flex items-center p-2">
                          <svg className="h-6 w-6 flex-shrink-0 text-white" fill="none" viewBox="0 0 24 24"
                               strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stokelinecap="round" strokeLinejoin="round"
                                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                          </svg>
                          <span className="ml-2 text-sm font-medium text-white">0</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}