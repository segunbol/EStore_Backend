"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductSchema = exports.getProductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createProductSchema = {
    body: joi_1.default.object({
        name: joi_1.default.string().required(),
        slug: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        Description: joi_1.default.string().allow(''),
        image: joi_1.default.string().required(),
        images: joi_1.default.array().items(joi_1.default.string()),
        brand: joi_1.default.string().required(),
        price: joi_1.default.string().required(),
        category: joi_1.default.string().required(),
        countInStock: joi_1.default.number().required(),
        rating: joi_1.default.number().required(),
        numReviews: joi_1.default.number(),
        isFeatured: joi_1.default.boolean().required(),
    }),
};
exports.updateProductSchema = {
    params: joi_1.default.object({
        productId: joi_1.default.string().required(),
    }),
    body: joi_1.default.object({
        name: joi_1.default.string().required(),
        slug: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        Description: joi_1.default.string().allow(''),
        image: joi_1.default.string().required(),
        images: joi_1.default.array().items(joi_1.default.string()),
        brand: joi_1.default.string().required(),
        price: joi_1.default.string().required(),
        category: joi_1.default.string().required(),
        countInStock: joi_1.default.number().required(),
        rating: joi_1.default.number().required(),
        numReviews: joi_1.default.number(),
        isFeatured: joi_1.default.boolean().required(),
    }),
};
exports.getProductSchema = {
    params: joi_1.default.object({
        productId: joi_1.default.string().required(),
    }),
};
exports.deleteProductSchema = {
    params: joi_1.default.object({
        productId: joi_1.default.string().required(),
    }),
};
