import React from 'react';
import { ProductListCard } from '@/components/products/ProductListCard/ProductListCard';

type InLineProductListProps = {
  products: any[]
}

export const InLineProductList : React.FC<InLineProductListProps> = ({ products }) => {
    return (
      <>
          <div className="flex items-center justify-between space-x-4">
            <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Otros usuarios estan viendo
            </h2>
            <a href="#" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Ver todos
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {products.map((product) => (
              <ProductListCard key={product.id} product={product}/>
            ))}
          </div>
      </>
    );
}