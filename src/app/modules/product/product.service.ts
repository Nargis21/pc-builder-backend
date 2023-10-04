import { IProduct } from './product.interface';
import { Product } from './product.model';

const getRandomProducts = async (): Promise<IProduct[]> => {
  const randomProducts = await Product.aggregate([
    { $sample: { size: 6 } }, // Retrieve six random documents
  ]);

  // Populate the 'category' field for each random product
  const populatedProducts = await Product.populate(randomProducts, {
    path: 'category',
  });

  return populatedProducts;
};

const getProductById = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id).populate('category');
  return result;
};

const getProductByCategory = async (
  categoryId: string
): Promise<IProduct[]> => {
  const result = await Product.find({ category: categoryId }).populate(
    'category'
  );
  return result;
};

export const ProductService = {
  getRandomProducts,
  getProductById,
  getProductByCategory,
};
