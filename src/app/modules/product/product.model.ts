import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './product.interface';

const ProductSchema = new Schema<IProduct>(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    key_features: {
      type: Object,
      required: true,
    },
    individual_rating: {
      type: Number,
      required: true,
    },
    average_rating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct, ProductModel>('Product', ProductSchema);
