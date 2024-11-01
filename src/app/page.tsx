import { loadCaseStudies } from '@/lib/mdx';

function MobileMenu(){
  return (
    <>
      <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                     aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-2">
              <div className="border-b border-gray-200">
                <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                  <button id="tabs-1-tab-1"
                          className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900"
                          aria-controls="tabs-1-panel-1" role="tab" type="button">Women
                  </button>
                  <button id="tabs-1-tab-2"
                          className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900"
                          aria-controls="tabs-1-panel-2" role="tab" type="button">Men
                  </button>
                </div>
              </div>
              
              <div id="tabs-1-panel-1" className="space-y-12 px-4 py-6" aria-labelledby="tabs-1-tab-1" role="tabpanel">
                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                  <div className="group relative">
                    <div
                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg"
                           alt="Models sitting back to back, wearing Basic Tee in black and bone."
                           className="object-cover object-center" />
                    </div>
                    <a href="#" className="mt-6 block text-sm font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                      New Arrivals
                    </a>
                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">Shop now</p>
                  </div>
                  <div className="group relative">
                    <div
                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg"
                           alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                           className="object-cover object-center" />
                    </div>
                    <a href="#" className="mt-6 block text-sm font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                      Basic Tees
                    </a>
                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">Shop now</p>
                  </div>
                  <div className="group relative">
                    <div
                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-03.jpg"
                           alt="Model wearing minimalist watch with black wristband and white watch face."
                           className="object-cover object-center" />
                    </div>
                    <a href="#" className="mt-6 block text-sm font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                      Accessories
                    </a>
                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">Shop now</p>
                  </div>
                  <div className="group relative">
                    <div
                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-04.jpg"
                           alt="Model opening tan leather long wallet with credit card pockets and cash pouch."
                           className="object-cover object-center" />
                    </div>
                    <a href="#" className="mt-6 block text-sm font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                      Carry
                    </a>
                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">Shop now</p>
                  </div>
                </div>
              </div>
              <div id="tabs-1-panel-2" className="space-y-12 px-4 py-6" aria-labelledby="tabs-1-tab-2" role="tabpanel">
                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                  <div className="group relative">
                    <div
                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-01.jpg"
                           alt="Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."
                           className="object-cover object-center" />
                    </div>
                    <a href="#" className="mt-6 block text-sm font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                      New Arrivals
                    </a>
                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">Shop now</p>
                  </div>
                  <div className="group relative">
                    <div
                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-02.jpg"
                           alt="Model wearing light heather gray t-shirt." className="object-cover object-center" />
                    </div>
                    <a href="#" className="mt-6 block text-sm font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                      Basic Tees
                    </a>
                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">Shop now</p>
                  </div>
                  <div className="group relative">
                    <div
                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-03.jpg"
                           alt="Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body."
                           className="object-cover object-center" />
                    </div>
                    <a href="#" className="mt-6 block text-sm font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                      Accessories
                    </a>
                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">Shop now</p>
                  </div>
                  <div className="group relative">
                    <div
                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-04.jpg"
                           alt="Model putting folded cash into slim card holder olive leather wallet with hand stitching."
                           className="object-cover object-center" />
                    </div>
                    <a href="#" className="mt-6 block text-sm font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                      Carry
                    </a>
                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">Shop now</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Company</a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Stores</a>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Create an account</a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <form>
                <div className="inline-block">
                  <label htmlFor="mobile-currency" className="sr-only">Currency</label>
                  <div
                    className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                    <select id="mobile-currency" name="currency"
                            className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800">
                      <option>CAD</option>
                      <option>USD</option>
                      <option>AUD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                           aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd"
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function HeroSection() {
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
                        <path fill-rule="evenodd"
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                              clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>

              <div className="flex items-center space-x-6">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">Create an account</a>
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
                          <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                  <div className="group relative">
                                    <div
                                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg"
                                        alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                        className="object-cover object-center" />
                                    </div>
                                    <a href="#" className="mt-4 block font-medium text-gray-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                      New Arrivals
                                    </a>
                                    <p aria-hidden="true" className="mt-1">Shop now</p>
                                  </div>
                                  <div className="group relative">
                                    <div
                                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg"
                                        alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                        className="object-cover object-center" />
                                    </div>
                                    <a href="#" className="mt-4 block font-medium text-gray-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                      Basic Tees
                                    </a>
                                    <p aria-hidden="true" className="mt-1">Shop now</p>
                                  </div>
                                  <div className="group relative">
                                    <div
                                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-03.jpg"
                                        alt="Model wearing minimalist watch with black wristband and white watch face."
                                        className="object-cover object-center" />
                                    </div>
                                    <a href="#" className="mt-4 block font-medium text-gray-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                      Accessories
                                    </a>
                                    <p aria-hidden="true" className="mt-1">Shop now</p>
                                  </div>
                                  <div className="group relative">
                                    <div
                                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-04.jpg"
                                        alt="Model opening tan leather long wallet with credit card pockets and cash pouch."
                                        className="object-cover object-center" />
                                    </div>
                                    <a href="#" className="mt-4 block font-medium text-gray-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                      Carry
                                    </a>
                                    <p aria-hidden="true" className="mt-1">Shop now</p>
                                  </div>
                                </div>
                              </div>
                            </div>
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

                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                  <div className="group relative">
                                    <div
                                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-01.jpg"
                                        alt="Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."
                                        className="object-cover object-center" />
                                    </div>
                                    <a href="#" className="mt-4 block font-medium text-gray-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                      New Arrivals
                                    </a>
                                    <p aria-hidden="true" className="mt-1">Shop now</p>
                                  </div>
                                  <div className="group relative">
                                    <div
                                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-02.jpg"
                                        alt="Model wearing light heather gray t-shirt."
                                        className="object-cover object-center" />
                                    </div>
                                    <a href="#" className="mt-4 block font-medium text-gray-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                      Basic Tees
                                    </a>
                                    <p aria-hidden="true" className="mt-1">Shop now</p>
                                  </div>
                                  <div className="group relative">
                                    <div
                                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-03.jpg"
                                        alt="Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body."
                                        className="object-cover object-center" />
                                    </div>
                                    <a href="#" className="mt-4 block font-medium text-gray-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                      Accessories
                                    </a>
                                    <p aria-hidden="true" className="mt-1">Shop now</p>
                                  </div>
                                  <div className="group relative">
                                    <div
                                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-01-men-category-04.jpg"
                                        alt="Model putting folded cash into slim card holder olive leather wallet with hand stitching."
                                        className="object-cover object-center" />
                                    </div>
                                    <a href="#" className="mt-4 block font-medium text-gray-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                      Carry
                                    </a>
                                    <p aria-hidden="true" className="mt-1">Shop now</p>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </button>

                    <a href="#" className="ml-2 p-2 text-white">
                      <span className="sr-only">Search</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
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
                    <a href="#" className="hidden text-sm font-medium text-white lg:block">Search</a>

                    <div className="flex items-center lg:ml-8">
                      <a href="#" className="p-2 text-white lg:hidden">
                        <span className="sr-only">Help</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                      </a>
                      <a href="#" className="hidden text-sm font-medium text-white lg:block">Help</a>
                      <div className="ml-4 flow-root lg:ml-8">
                        <a href="#" className="group -m-2 flex items-center p-2">
                          <svg className="h-6 w-6 flex-shrink-0 text-white" fill="none" viewBox="0 0 24 24"
                               stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
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

      <div
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
        <p className="mt-4 text-xl text-white">The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in stock.</p>
        <a href="#"
           className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100">Shop
          New Arrivals</a>
      </div>
    </div>
  )
}


export default async function Home() {

  return (
    <>
      <div className="bg-white">
        <MobileMenu />

        <HeroSection />

        <main>
          <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">Shop by
                Category</h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                  <div
                    className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                    <a href="#"
                       className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" className="absolute inset-0">
                  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-01.jpg" alt=""
                       className="h-full w-full object-cover object-center" />
                </span>
                      <span aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                      <span className="relative mt-auto text-center text-xl font-bold text-white">New Arrivals</span>
                    </a>
                    <a href="#"
                       className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" className="absolute inset-0">
                  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-02.jpg" alt=""
                       className="h-full w-full object-cover object-center" />
                </span>
                      <span aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                      <span className="relative mt-auto text-center text-xl font-bold text-white">Productivity</span>
                    </a>
                    <a href="#"
                       className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" className="absolute inset-0">
                  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-04.jpg" alt=""
                       className="h-full w-full object-cover object-center" />
                </span>
                      <span aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                      <span className="relative mt-auto text-center text-xl font-bold text-white">Workspace</span>
                    </a>
                    <a href="#"
                       className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" className="absolute inset-0">
                  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-05.jpg" alt=""
                       className="h-full w-full object-cover object-center" />
                </span>
                      <span aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                      <span className="relative mt-auto text-center text-xl font-bold text-white">Accessories</span>
                    </a>
                    <a href="#"
                       className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" className="absolute inset-0">
                  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-category-03.jpg" alt=""
                       className="h-full w-full object-cover object-center" />
                </span>
                      <span aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                      <span className="relative mt-auto text-center text-xl font-bold text-white">Sale</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </section>

          <section aria-labelledby="social-impact-heading"
                   className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-feature-section-01.jpg" alt=""
                     className="h-full w-full object-cover object-center" />
              </div>
              <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                  <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="block sm:inline">Level up</span>
                    <span className="block sm:inline">your desk</span>
                  </h2>
                  <p className="mt-3 text-xl text-white">Make your desk beautiful and organized. Post a picture to
                    social media and watch it get more likes than life-changing announcements. Reflect on the shallow
                    nature of existence. At least you have a really nice desk setup.</p>
                  <a href="#"
                     className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop
                    Workspace</a>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="collection-heading"
                   className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
            <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">Shop by
              Collection</h2>
            <p className="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create
              a collection inspired by the natural world.</p>

            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              <a href="#" className="group block">
                <div aria-hidden="true"
                     className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-01.jpg"
                       alt="Brown leather key ring with brass metal loops and rivets on wood table."
                       className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">Handcrafted Collection</h3>
                <p className="mt-2 text-sm text-gray-500">Keep your phone, keys, and wallet together, so you can lose
                  everything at once.</p>
              </a>
              <a href="#" className="group block">
                <div aria-hidden="true"
                     className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-02.jpg"
                       alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard."
                       className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">Organized Desk Collection</h3>
                <p className="mt-2 text-sm text-gray-500">The rest of the house will still be a mess, but your desk will
                  look great.</p>
              </a>
              <a href="#" className="group block">
                <div aria-hidden="true"
                     className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-03.jpg"
                       alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad."
                       className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">Focus Collection</h3>
                <p className="mt-2 text-sm text-gray-500">Be more productive than enterprise project managers with a
                  single piece of paper.</p>
              </a>
            </div>
          </section>

          <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-feature-section-02.jpg" alt=""
                     className="h-full w-full object-cover object-center" />
              </div>
              <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                  <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple
                    productivity</h2>
                  <p className="mt-3 text-xl text-white">Endless tasks, limited hours, a single piece of paper. Not
                    really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled
                    flowcharts with our Focus system. Just the undeniable urge to fill empty circles.</p>
                  <a href="#"
                     className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop
                    Focus</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer aria-labelledby="footer-heading" className="bg-gray-900">
          <h2 id="footer-heading" className="sr-only">Footer</h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-white">Shop</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Bags</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Tees</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Objects</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Home Goods</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Accessories</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Company</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Who we are</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Sustainability</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Press</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Careers</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Terms &amp; Conditions</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-white">Account</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Manage Account</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Returns &amp; Exchanges</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Redeem a Gift Card</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Connect</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Pinterest</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12 md:mt-16 xl:mt-0">
                <h3 className="text-sm font-medium text-white">Sign up for our newsletter</h3>
                <p className="mt-6 text-sm text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
                <form className="mt-2 flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input id="email-address" type="text" autoComplete="email" required
                         className="w-full min-w-0 appearance-none rounded-md border border-white bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900" />
                  <div className="ml-4 flex-shrink-0">
                    <button type="submit"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Sign
                      up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="border-t border-gray-800 py-10">
              <p className="text-sm text-gray-400">Copyright &copy; 2021 Your Company, Inc.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
