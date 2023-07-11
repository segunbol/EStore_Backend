"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderItemSchema = exports.getOrderItemSchema = exports.updateOrderItemSchema = exports.createOrderItemSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createOrderItemSchema = {
    body: joi_1.default.object({
        quantity: joi_1.default.number().required(),
        product: joi_1.default.string().required(),
    }),
};
exports.updateOrderItemSchema = {
    params: joi_1.default.object({
        cartItemId: joi_1.default.string().required(),
    }),
    body: joi_1.default.object({
        quantity: joi_1.default.number().required(),
        product: joi_1.default.string().required(),
    }),
};
exports.getOrderItemSchema = {
    params: joi_1.default.object({
        cartItemId: joi_1.default.string().required(),
    }),
};
exports.deleteOrderItemSchema = {
    params: joi_1.default.object({
        cartItemId: joi_1.default.string().required(),
    }),
};
