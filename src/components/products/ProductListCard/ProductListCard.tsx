import React from 'react';
import Image from 'next/image';

type ProductListCardProps = {
  product:any;
}

export const ProductListCard : React.FC<ProductListCardProps> = ({ product }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="relative">
        <Image
          width={200}
          height={200}
          alt={product.imageAlt}
          src={product.imageSrc}
          className="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100"
        >
          <div
            className="w-full rounded-md bg-white/75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
            Ver producto
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
        <h3>
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p>{product.price}</p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{product.category}</p>
    </div>
  )
}