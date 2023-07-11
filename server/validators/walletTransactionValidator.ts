import Joi from 'joi';

export const createWalletTransactionSchema = {
  body: Joi.object({
    receiverUser_Id: Joi.string().required(),
    senderUser_Id: Joi.string().required(),
    amount: Joi.number().required(),
    wallet_number: Joi.string().required(),
    type: Joi.string().valid('credit', 'debit').required(),
  }),
};

export const updateWalletTransactionSchema = {
  params: Joi.object({
    walletTransactionId: Joi.string().required(),
  }),
  body: Joi.object({
    receiverUser_Id: Joi.string().required(),
    senderUser_Id: Joi.string().required(),
    amount: Joi.number().required(),
    wallet_number: Joi.string().required(),
    type: Joi.string().valid('credit', 'debit').required(),
  }),
};

export const getWalletTransactionSchema = {
  params: Joi.object({
    walletTransactionId: Joi.string().required(),
  }),
};

export const deleteWalletTransactionSchema = {
  params: Joi.object({
    walletTransactionId: Joi.string().required(),
  }),
};