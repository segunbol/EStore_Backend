"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const WalletPurchaseHistSchema = new mongoose_1.Schema({
    store_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Store",
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    amount: {
        type: Number
    },
    order: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Order"
    }
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
WalletPurchaseHistSchema.plugin(mongoose_paginate_v2_1.default);
const WalletPurchaseHist = (0, mongoose_1.model)("WalletPurchaseHist", WalletPurchaseHistSchema);
module.exports = WalletPurchaseHist;
