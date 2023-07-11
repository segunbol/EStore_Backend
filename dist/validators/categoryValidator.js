"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllCategoriesSchema = exports.deleteCategorySchema = exports.getCategoriesSchema = exports.getCategorySchema = exports.createCategorySchema = void 0;
const joi_1 = require("./joi");
exports.createCategorySchema = {
    body: joi_1.Joi.object({
        store_id: joi_1.Joi.objectId().required(),
        name: joi_1.Joi.objectId().required(),
        image: joi_1.Joi.string().required()
    })
};
exports.getCategorySchema = {
    query: joi_1.Joi.object({
        category: joi_1.Joi.string().required()
    })
};
exports.getCategoriesSchema = {
    query: joi_1.Joi.object({
        categories: joi_1.Joi.array().items(joi_1.Joi.string()).required()
    })
};
exports.deleteCategorySchema = {
    params: joi_1.Joi.object({
        categoryId: joi_1.Joi.string().required()
    })
};
exports.deleteAllCategoriesSchema = {
    query: joi_1.Joi.object({
        confirm: joi_1.Joi.boolean().valid(true).required()
    })
};
