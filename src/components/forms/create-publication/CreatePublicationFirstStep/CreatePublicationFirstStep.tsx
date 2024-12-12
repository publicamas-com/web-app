import React from 'react'
import { ICategory } from '@/types/api/category.type'
import { PickCategory } from '@/components/forms/create-publication/PickCategory'

type CreatePublicationFirstStepFormProps = {
  categories: ICategory[]
  onSelectCategory: (category: ICategory) => void
  onGoToPreviousCategory: () => void
}

export const CreatePublicationFirstStepForm: React.FC<
  CreatePublicationFirstStepFormProps
> = ({ categories, onSelectCategory, onGoToPreviousCategory }) => {
  return (
    <>
      <PickCategory
        categories={categories}
        onSelectCategory={onSelectCategory}
      />
    </>
  )
}
