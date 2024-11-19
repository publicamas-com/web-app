import { ProductListCard } from '@/components/products/ProductListCard/ProductListCard';
import React from 'react';

type ProductListMatrixProps = {
  products: any[]
}
export const ProductListMatrix: React.FC<ProductListMatrixProps> = ({ products }) => {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductListCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};