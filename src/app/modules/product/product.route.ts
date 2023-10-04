import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.get('/:id', ProductController.getProductById);
router.get('/category/:id', ProductController.getProductsByCategory);
router.get('/', ProductController.getRandomProducts);

export const ProductRoutes = router;
