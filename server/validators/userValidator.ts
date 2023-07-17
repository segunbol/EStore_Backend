import * as Joi from 'joi'

export const createUserSchema = {
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    passwordHash: Joi.string().required(),
    phone: Joi.number().required(),
    isAdmin: Joi.boolean().required(),
    apartment: Joi.string().required(),
    street: Joi.string().required(),
    zip: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }),
};

export const updateUserSchema = {
  params: Joi.object({
    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  }),
  body: Joi.object({
    adminUserId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    userID: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    first_name: Joi.string().allow(),
    last_name: Joi.string().allow(),
    email: Joi.string().allow(),
    passwordHash: Joi.string().allow(),
    phone: Joi.number().allow(),
    isAdmin: Joi.boolean().allow(),
    apartment: Joi.string().allow(),
    street: Joi.string().allow(),
    zip: Joi.string().allow(),
    city: Joi.string().allow(),
    country: Joi.string().allow(),
  }),
};

export const makeAdminSchema = {
  params: Joi.object({
    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  }),
  body: Joi.object({
    adminUserId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    isAdmin: Joi.boolean().required(),})
};

export const getUserSchema = {
  params: Joi.object({
    userId: Joi.string().required(),
  }),
};

export const deleteUserSchema = {
  params: Joi.object({
    userId: Joi.string().required(),
  }),
};
