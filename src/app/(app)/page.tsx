'use client';

import React from 'react';
import { HomeHeroSection } from '@/components';
import { CategorySection } from '@/components/sections/home/CategorySection/CategorySection';
import Image from 'next/image';
import { InLineProductList } from '@/components/products/InLineProductList/InLineProductList';

const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
];


const customerAreLookingProducts: any[] = [
    {
      id: 1,
      name: 'Agua de Mar extraida en Mar del Plata sin modificacion',
      category: 'UI Kit',
      href: '#',
      price: '$3000',
      imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2848-1.jpg?v=2797',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },{
      id: 2,
      name: 'XIAOMI POCO X3 PRO 256GB 8GB RAM',
      category: 'UI Kit',
      href: '#',
      price: '$49',
      imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2825-5.jpg?v=3122',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },{
      id: 3,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '$49',
      imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2840-1.jpg?v=1026',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },{
      id: 4,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '$49',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    }
  ];

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <div>
        {/* Category section */}
        <CategorySection />

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <Image
                alt=""
                src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                className="size-full object-cover object-center"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Collection section */}
        <section
          aria-labelledby="collection-heading"
          className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
        >
          <InLineProductList products={customerAreLookingProducts} />
        </section>

        {/* Featured section */}
        <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <Image
                alt=""
                src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                className="size-full object-cover object-center"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;