import Joi from 'joi';

export const createOrderSchema = {
  body: Joi.object({
    store_Id: Joi.string().required(),
    user_id: Joi.string().required(),
    orderItems: Joi.array().items(Joi.string()).required(),
    shippingAddress1: Joi.string().required(),
    shippingAddress2: Joi.string().allow(''),
    city: Joi.string().required(),
    zip: Joi.string().required(),
    country: Joi.string().required(),
    phone: Joi.string().required(),
    status: Joi.string().required().default('Pending'),
    totalPrice: Joi.number()
  })
};

export const getOrdersSchema = {
    query: Joi.object({
        status: Joi.string().valid('Pending', 'Completed', 'Cancelled').optional()
    })
};

export const getOrderSchema = {
params: Joi.object({
    orderId: Joi.string().required()
})
};

export const updateOrderSchema = {
    params: Joi.object({
      orderId: Joi.string().required()
    }),
    body: Joi.object({
      status: Joi.string().valid('Pending', 'Completed', 'Cancelled').required(),
      totalPrice: Joi.number().optional()
    })
  };

export const deleteOrderSchema = {
params: Joi.object({
    orderId: Joi.string().required()
})
};