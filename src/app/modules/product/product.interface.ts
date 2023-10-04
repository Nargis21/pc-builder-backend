import { Model, Types } from 'mongoose';
import { ICategory } from '../category/category.interface';

export type IProduct = {
  image: string;
  name: string;
  category: Types.ObjectId | ICategory;
  status: string;
  price: number;
  description: string;
  key_features: object;
  individual_rating: number;
  average_rating: number;
  reviews: string[];
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
