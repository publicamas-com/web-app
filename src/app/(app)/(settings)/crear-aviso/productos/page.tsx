'use client'
import React, { useEffect } from 'react'
import { SimpleProgressBar } from '@/components'
import { CreatePublicationFirstStepForm } from '@/components/forms'
import { steps } from './constants'
import { ICategory } from '@/types/api/category.type'
import {
  callGetChildCategoriesByParentId,
  callGetParentCategories,
} from '@/client/apiClient'

export default function CrearAvisoPage() {
  const [categories, setCategories] = React.useState<ICategory[]>([])
  const categoryStack = React.useRef<ICategory[]>([])

  const handleGoToPreviousCategory = async () => {
    const el = categoryStack.current.pop()
    debugger
    console.log(el)
    if (el) {
      const result = await callGetChildCategoriesByParentId(el.id)
      setCategories(result);
    } else {
      const result = await callGetParentCategories()
      setCategories(result);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await callGetParentCategories()
      setCategories(result)
    }
    fetchData().catch(console.error)
  }, [])

  const handleSelectCategory = async (category: ICategory) => {
    categoryStack.current.push(category)
    const result = await callGetChildCategoriesByParentId(category.id)
    setCategories(result)
  }

  return (
    <div>
      <SimpleProgressBar steps={steps} />
      <CreatePublicationFirstStepForm
        categories={categories}
        onSelectCategory={handleSelectCategory}
        onGoToPreviousCategory={handleGoToPreviousCategory}
      />
    </div>
  )
}
