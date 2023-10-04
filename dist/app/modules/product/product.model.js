"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
exports.Product = (0, mongoose_1.model)('Product', ProductSchema);
