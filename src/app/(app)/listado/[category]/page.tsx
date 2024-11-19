'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { ProductListMatrix } from '@/components/products/ProductList/ProductListMatrix';

const products: any[] = [
  {
    id: 1,
    name: 'Agua de Mar extraida en Mar del Plata sin modificacion',
    category: 'UI Kit',
    href: '#',
    price: '$3000',
    imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2848-1.jpg?v=2797',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 2,
    name: 'XIAOMI POCO X3 PRO 256GB 8GB RAM',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2825-5.jpg?v=3122',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 3,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2840-1.jpg?v=1026',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 4,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 1,
    name: 'Agua de Mar extraida en Mar del Plata sin modificacion',
    category: 'UI Kit',
    href: '#',
    price: '$3000',
    imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2848-1.jpg?v=2797',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 2,
    name: 'XIAOMI POCO X3 PRO 256GB 8GB RAM',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2825-5.jpg?v=3122',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 3,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2840-1.jpg?v=1026',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 4,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 1,
    name: 'Agua de Mar extraida en Mar del Plata sin modificacion',
    category: 'UI Kit',
    href: '#',
    price: '$3000',
    imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2848-1.jpg?v=2797',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 2,
    name: 'XIAOMI POCO X3 PRO 256GB 8GB RAM',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2825-5.jpg?v=3122',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 3,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://www.publicamas.com.ar/img/productos/grandes/ARG-2840-1.jpg?v=1026',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }, {
    id: 4,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
];

const CategoryPage = ({}) => {
  const { category } = useParams();

  return (
    <div>
      <h1 className={'text-4xl font-bold'}>{category}</h1>
      <ProductListMatrix products={products} />
    </div>
  );
};

export default CategoryPage;