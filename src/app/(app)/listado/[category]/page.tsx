"use client";
import React from 'react';
import { useParams } from 'next/navigation';

const CategoryPage = ({}) => {
  const { category } = useParams();

  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
}

export default CategoryPage;