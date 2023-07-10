import { Joi } from "./joi";

export const createAccountBalanceSchema = {
  body: Joi.object({
    store_ID: Joi.objectId().required(),
    userID: Joi.objectId().required(),
    balance: Joi.number().required(),
  }),
};

export const updateAccountBalanceSchema = {
  params: Joi.object({
    userID: Joi.objectId().required(),
  }),
  body: Joi.object({
    store_ID: Joi.objectId().required(),
    amount: Joi.objectId().required(),
    // accountBalanceID: Joi.objectId().required(),
  }),
};

export const getAccountBalanceSchema = {
  params: Joi.object({
    userID: Joi.objectId().required(),
  }),
  body: Joi.object({
    store_ID: Joi.objectId().required(),
    // accountBalanceID: Joi.objectId().required(),
  }),
};

export const getAccountBalancesSchema = {
    query: Joi.object({
        balance:Joi.number().allow(),
        store_ID: Joi.objectId().allow()
    })
}
