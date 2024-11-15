import { ChevronRightIcon } from '@heroicons/react/16/solid';
import React from 'react';

type CategoryListElementProps = {
  category: {
    name: string;
    href: string;
  }
}

export const CategoryListElement: React.FC<CategoryListElementProps> = ({ category }) => {
  return (
    <>
      <div className="flex gap-x-4 pr-6 sm:w-1/2 sm:flex-none">
        <div className="min-w-0 flex-auto">
          <p className="text-sm/6 font-semibold text-gray-900">
            <a href={`/listado/${category.href}`}>
              <span className="absolute inset-x-0 -top-px bottom-0" />
              {category.name}
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-4 sm:w-1/2 sm:flex-none">
        <div className="hidden sm:block">
        </div>
        <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
      </div>
    </>
  );
};