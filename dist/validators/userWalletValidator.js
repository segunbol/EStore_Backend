"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserWalletSchema = exports.getUserWalletSchema = exports.updateUserWalletSchema = exports.createUserWalletSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createUserWalletSchema = {
    body: joi_1.default.object({
        store_id: joi_1.default.string().required(),
        user_id: joi_1.default.string().required(),
        wallet_number: joi_1.default.number().required(),
        balance: joi_1.default.number().required(),
    }),
};
exports.updateUserWalletSchema = {
    params: joi_1.default.object({
        walletId: joi_1.default.string().required(),
    }),
    body: joi_1.default.object({
        store_id: joi_1.default.string().required(),
        user_id: joi_1.default.string().required(),
        wallet_number: joi_1.default.number().required(),
        balance: joi_1.default.number().required(),
    }),
};
exports.getUserWalletSchema = {
    params: joi_1.default.object({
        walletId: joi_1.default.string().required(),
    }),
};
exports.deleteUserWalletSchema = {
    params: joi_1.default.object({
        walletId: joi_1.default.string().required(),
    }),
};
