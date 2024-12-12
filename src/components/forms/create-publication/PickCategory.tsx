import React from 'react'
import { ICategory } from '@/types/api/category.type'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

type PickCategoryProps = {
  categories: ICategory[]
  onSelectCategory: (category: ICategory) => void
}

export const PickCategory: React.FC<PickCategoryProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <>
      {categories.length === 0 && <ConfirmCategory />}
      {categories.length > 0 && (
        <ul role="list" className="divide-y divide-gray-100">
          {categories.map((category) => (
            <CategoryListElement
              key={category.id}
              category={category}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </ul>
      )}
    </>
  )
}

type PickCategoryListElementProps = {
  category: ICategory
  onSelectCategory: (category: ICategory) => void
}

const CategoryListElement: React.FC<PickCategoryListElementProps> = ({
  category,
  onSelectCategory,
}) => {
  return (
    <>
      <li key={category.id} className="relative py-5 hover:bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  <a onClick={() => onSelectCategory(category)}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {category.name}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <ChevronRightIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

type ConfirmCategoryProps= {

}

const ConfirmCategory :React.FC<ConfirmCategoryProps> = () => {
  return (
    <>

    </>
  )
}
