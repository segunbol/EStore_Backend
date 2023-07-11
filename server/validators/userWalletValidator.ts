import Joi from 'joi';

export const createUserWalletSchema = {
  body: Joi.object({
    store_id: Joi.string().required(),
    user_id: Joi.string().required(),
    wallet_number: Joi.number().required(),
    balance: Joi.number().required(),
  }),
};

export const updateUserWalletSchema = {
  params: Joi.object({
    walletId: Joi.string().required(),
  }),
  body: Joi.object({
    store_id: Joi.string().required(),
    user_id: Joi.string().required(),
    wallet_number: Joi.number().required(),
    balance: Joi.number().required(),
  }),
};

export const getUserWalletSchema = {
  params: Joi.object({
    walletId: Joi.string().required(),
  }),
};

export const deleteUserWalletSchema = {
  params: Joi.object({
    walletId: Joi.string().required(),
  }),
};