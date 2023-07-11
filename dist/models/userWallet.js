"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const walletSchema = new mongoose_1.Schema({
    store_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        Ref: "Store",
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        Ref: "User",
    },
    wallet_number: {
        type: Number,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
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
walletSchema.plugin(mongoose_paginate_v2_1.default);
const Wallet = (0, mongoose_1.model)('Wallet', walletSchema);
module.exports = Wallet;
