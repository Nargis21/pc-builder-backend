import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ProductService } from './product.service';
import { IProduct } from './product.interface';

const getRandomProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getRandomProducts();
  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});

const getProductById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ProductService.getProductById(id);
  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  });
});

const getProductsByCategory = catchAsync(
  async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const result = await ProductService.getProductByCategory(categoryId);
    sendResponse<IProduct[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  }
);

export const ProductController = {
  getRandomProducts,
  getProductById,
  getProductsByCategory,
};
