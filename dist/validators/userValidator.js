"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSchema = exports.getUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createUserSchema = {
    body: joi_1.default.object({
        first_name: joi_1.default.string().required(),
        last_name: joi_1.default.string().required(),
        email: joi_1.default.string().required(),
        passwordHash: joi_1.default.string().required(),
        phone: joi_1.default.number().required(),
        isAdmin: joi_1.default.boolean().required(),
        apartment: joi_1.default.string().required(),
        street: joi_1.default.string().required(),
        zip: joi_1.default.string().required(),
        city: joi_1.default.string().required(),
        country: joi_1.default.string().required(),
    }),
};
exports.updateUserSchema = {
    params: joi_1.default.object({
        userId: joi_1.default.string().required(),
    }),
    body: joi_1.default.object({
        first_name: joi_1.default.string().allow(),
        last_name: joi_1.default.string().allow(),
        email: joi_1.default.string().allow(),
        passwordHash: joi_1.default.string().allow(),
        phone: joi_1.default.number().allow(),
        isAdmin: joi_1.default.boolean().allow(),
        apartment: joi_1.default.string().allow(),
        street: joi_1.default.string().allow(),
        zip: joi_1.default.string().allow(),
        city: joi_1.default.string().allow(),
        country: joi_1.default.string().allow(),
    }),
};
exports.getUserSchema = {
    params: joi_1.default.object({
        userId: joi_1.default.string().required(),
    }),
};
exports.deleteUserSchema = {
    params: joi_1.default.object({
        userId: joi_1.default.string().required(),
    }),
};
