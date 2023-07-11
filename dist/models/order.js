"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const OrderSchema = new mongoose_1.Schema({
    store_Id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Store",
        required: true,
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    orderItems: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'OrderItem',
            required: true
        }],
    shippingAddress1: {
        type: String,
        required: true,
    },
    shippingAddress2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
}, {
    timestamps: true,
    toObject: {
        transform(_doc, ret) {
            delete ret.__v;
        },
    },
    toJSON: {
        getters: true,
        virtuals: true,
        transform(_doc, ret) {
            delete ret._id;
            delete ret.__v;
        },
    },
});
OrderSchema.plugin(mongoose_paginate_v2_1.default);
const Order = (0, mongoose_1.model)("Order", OrderSchema);
module.exports = Order;
