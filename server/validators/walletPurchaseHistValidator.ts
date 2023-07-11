import Joi from 'joi';

export const createWalletPurchaseHistSchema = {
    body: Joi.object({
      store_id: Joi.string().required(),
      user_id: Joi.string().required(),
      amount: Joi.number(),
      order: Joi.string().required(),
    }),
  };
  
  export const updateWalletPurchaseHistSchema = {
    params: Joi.object({
      walletPurchaseHistId: Joi.string().required(),
    }),
    body: Joi.object({
      store_id: Joi.string().required(),
      user_id: Joi.string().required(),
      amount: Joi.number(),
      order: Joi.string().required(),
    }),
  };
  
  export const getWalletPurchaseHistSchema = {
    params: Joi.object({
      walletPurchaseHistId: Joi.string().required(),
    }),
  };
  
  export const deleteWalletPurchaseHistSchema = {
    params: Joi.object({
      walletPurchaseHistId: Joi.string().required(),
    }),
  };