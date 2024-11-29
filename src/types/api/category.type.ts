export interface CategoryElement {
  id: string;
  slug: string;
  name: string;
  href: string;
}

export interface ICategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  categories: CategoryElement[];
}