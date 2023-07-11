"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderSchema = exports.updateOrderSchema = exports.getOrderSchema = exports.getOrdersSchema = exports.createOrderSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createOrderSchema = {
    body: joi_1.default.object({
        store_Id: joi_1.default.string().required(),
        user_id: joi_1.default.string().required(),
        orderItems: joi_1.default.array().items(joi_1.default.string()).required(),
        shippingAddress1: joi_1.default.string().required(),
        shippingAddress2: joi_1.default.string().allow(''),
        city: joi_1.default.string().required(),
        zip: joi_1.default.string().required(),
        country: joi_1.default.string().required(),
        phone: joi_1.default.string().required(),
        status: joi_1.default.string().required().default('Pending'),
        totalPrice: joi_1.default.number()
    })
};
exports.getOrdersSchema = {
    query: joi_1.default.object({
        status: joi_1.default.string().valid('Pending', 'Completed', 'Cancelled').optional()
    })
};
exports.getOrderSchema = {
    params: joi_1.default.object({
        orderId: joi_1.default.string().required()
    })
};
exports.updateOrderSchema = {
    params: joi_1.default.object({
        orderId: joi_1.default.string().required()
    }),
    body: joi_1.default.object({
        status: joi_1.default.string().valid('Pending', 'Completed', 'Cancelled').required(),
        totalPrice: joi_1.default.number().optional()
    })
};
exports.deleteOrderSchema = {
    params: joi_1.default.object({
        orderId: joi_1.default.string().required()
    })
};
