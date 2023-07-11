import Joi from 'joi';

export const createProductSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    description: Joi.string().required(),
    Description: Joi.string().allow(''),
    image: Joi.string().required(),
    images: Joi.array().items(Joi.string()),
    brand: Joi.string().required(),
    price: Joi.string().required(),
    category: Joi.string().required(),
    countInStock: Joi.number().required(),
    rating: Joi.number().required(),
    numReviews: Joi.number(),
    isFeatured: Joi.boolean().required(),
  }),
};

export const updateProductSchema = {
  params: Joi.object({
    productId: Joi.string().required(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    description: Joi.string().required(),
    Description: Joi.string().allow(''),
    image: Joi.string().required(),
    images: Joi.array().items(Joi.string()),
    brand: Joi.string().required(),
    price: Joi.string().required(),
    category: Joi.string().required(),
    countInStock: Joi.number().required(),
    rating: Joi.number().required(),
    numReviews: Joi.number(),
    isFeatured: Joi.boolean().required(),
  }),
};

export const getProductSchema = {
  params: Joi.object({
    productId: Joi.string().required(),
  }),
};

export const deleteProductSchema = {
  params: Joi.object({
    productId: Joi.string().required(),
  }),
};