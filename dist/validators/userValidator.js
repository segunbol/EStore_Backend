"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSchema = exports.getUserSchema = exports.makeAdminSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const Joi = __importStar(require("joi"));
exports.createUserSchema = {
    body: Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        passwordHash: Joi.string().required(),
        phone: Joi.number().required(),
        isAdmin: Joi.boolean().required(),
        apartment: Joi.string().required(),
        street: Joi.string().required(),
        zip: Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required(),
    }),
};
exports.updateUserSchema = {
    params: Joi.object({
        userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    }),
    body: Joi.object({
        adminUserId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        userID: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        first_name: Joi.string().allow(),
        last_name: Joi.string().allow(),
        email: Joi.string().allow(),
        passwordHash: Joi.string().allow(),
        phone: Joi.number().allow(),
        isAdmin: Joi.boolean().allow(),
        apartment: Joi.string().allow(),
        street: Joi.string().allow(),
        zip: Joi.string().allow(),
        city: Joi.string().allow(),
        country: Joi.string().allow(),
    }),
};
exports.makeAdminSchema = {
    params: Joi.object({
        userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    }),
    body: Joi.object({
        adminUserId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        isAdmin: Joi.boolean().required(),
    })
};
exports.getUserSchema = {
    params: Joi.object({
        userId: Joi.string().required(),
    }),
};
exports.deleteUserSchema = {
    params: Joi.object({
        userId: Joi.string().required(),
    }),
};
