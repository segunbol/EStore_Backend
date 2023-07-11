import Joi from 'joi';

export const createOrderItemSchema = {
  body: Joi.object({
    quantity: Joi.number().required(),
    product: Joi.string().required(),
  }),
};

export const updateOrderItemSchema = {
  params: Joi.object({
    cartItemId: Joi.string().required(),
  }),
  body: Joi.object({
    quantity: Joi.number().required(),
    product: Joi.string().required(),
  }),
};

export const getOrderItemSchema = {
  params: Joi.object({
    cartItemId: Joi.string().required(),
  }),
};

export const deleteOrderItemSchema = {
  params: Joi.object({
    cartItemId: Joi.string().required(),
  }),
};