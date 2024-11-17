import React from 'react';
import { AppHeading } from '@/components/heading/AppHeading/AppHeading';
import { CategoryListElement } from '@/components';
import { CATEGORIES } from '@/constants';

const CategoriesPage = () => {
  return (
    <div>
      <AppHeading title="Categorias" path={["Categorias"]} />
      <ul role="list" className="divide-y divide-gray-100">
        {CATEGORIES.map((category) => (
          <li key={category.id} className="relative flex justify-between py-5">
            <CategoryListElement category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;