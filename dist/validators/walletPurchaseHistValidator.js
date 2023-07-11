"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWalletPurchaseHistSchema = exports.getWalletPurchaseHistSchema = exports.updateWalletPurchaseHistSchema = exports.createWalletPurchaseHistSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createWalletPurchaseHistSchema = {
    body: joi_1.default.object({
        store_id: joi_1.default.string().required(),
        user_id: joi_1.default.string().required(),
        amount: joi_1.default.number(),
        order: joi_1.default.string().required(),
    }),
};
exports.updateWalletPurchaseHistSchema = {
    params: joi_1.default.object({
        walletPurchaseHistId: joi_1.default.string().required(),
    }),
    body: joi_1.default.object({
        store_id: joi_1.default.string().required(),
        user_id: joi_1.default.string().required(),
        amount: joi_1.default.number(),
        order: joi_1.default.string().required(),
    }),
};
exports.getWalletPurchaseHistSchema = {
    params: joi_1.default.object({
        walletPurchaseHistId: joi_1.default.string().required(),
    }),
};
exports.deleteWalletPurchaseHistSchema = {
    params: joi_1.default.object({
        walletPurchaseHistId: joi_1.default.string().required(),
    }),
};
