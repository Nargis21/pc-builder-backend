"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
const getRandomProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const randomProducts = yield product_model_1.Product.aggregate([
        { $sample: { size: 6 } }, // Retrieve six random documents
    ]);
    // Populate the 'category' field for each random product
    const populatedProducts = yield product_model_1.Product.populate(randomProducts, {
        path: 'category',
    });
    return populatedProducts;
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id).populate('category');
    return result;
});
const getProductByCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({ category: categoryId }).populate('category');
    return result;
});
exports.ProductService = {
    getRandomProducts,
    getProductById,
    getProductByCategory,
};
