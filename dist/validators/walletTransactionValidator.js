"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWalletTransactionSchema = exports.getWalletTransactionSchema = exports.updateWalletTransactionSchema = exports.createWalletTransactionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createWalletTransactionSchema = {
    body: joi_1.default.object({
        receiverUser_Id: joi_1.default.string().required(),
        senderUser_Id: joi_1.default.string().required(),
        amount: joi_1.default.number().required(),
        wallet_number: joi_1.default.string().required(),
        type: joi_1.default.string().valid('credit', 'debit').required(),
    }),
};
exports.updateWalletTransactionSchema = {
    params: joi_1.default.object({
        walletTransactionId: joi_1.default.string().required(),
    }),
    body: joi_1.default.object({
        receiverUser_Id: joi_1.default.string().required(),
        senderUser_Id: joi_1.default.string().required(),
        amount: joi_1.default.number().required(),
        wallet_number: joi_1.default.string().required(),
        type: joi_1.default.string().valid('credit', 'debit').required(),
    }),
};
exports.getWalletTransactionSchema = {
    params: joi_1.default.object({
        walletTransactionId: joi_1.default.string().required(),
    }),
};
exports.deleteWalletTransactionSchema = {
    params: joi_1.default.object({
        walletTransactionId: joi_1.default.string().required(),
    }),
};
