import { ICategory } from './category.interface';
import { Category } from './category.model';

const getAllCategories = async (): Promise<ICategory[] | null> => {
  const result = await Category.find();
  return result;
};

export const CategoryService = {
  getAllCategories,
};
