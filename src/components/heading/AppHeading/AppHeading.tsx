import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

type AppHeadingProps = {
  title: string;
  path: string[];
}

type BreadcrumbAccumulator = {
  currentPath: string;
  elements: JSX.Element[];
}

export const AppHeading: React.FC<AppHeadingProps> = ({ title, path }) => {
  const breadcrumbElements = path.reduce<BreadcrumbAccumulator>((acc, item, index) => {
    const newPath = acc.currentPath + '/' + item;
    const breadcrumbElement = (
      <li key={index}>
        <div className="flex items-center">
          <ChevronRightIcon aria-hidden="true" className="mx-2 size-5 shrink-0 text-gray-500" />
          <a href={newPath} className="text-sm font-medium text-gray-400 hover:text-gray-200">
            {item}
          </a>
        </div>
      </li>
    );

    return {
      currentPath: newPath,
      elements: [...acc.elements, breadcrumbElement],
    };
  }, { currentPath: '', elements: [] });

  return (
    <div>
      <div>
        <nav aria-label="Breadcrumb" className="hidden sm:flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a href="/" className="text-sm font-medium text-gray-400 hover:text-gray-200">
                  Home
                </a>
              </div>
            </li>
            {breadcrumbElements.elements}
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-700 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};