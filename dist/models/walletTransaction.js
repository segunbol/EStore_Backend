"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const walletTransactionSchema = new mongoose_1.Schema({
    receiverUser_Id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    senderUser_Id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    wallet_number: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Wallet",
        required: true,
    },
    type: {
        type: String,
        enum: ["credit", "debit"],
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
walletTransactionSchema.plugin(mongoose_paginate_v2_1.default);
const Wallettransaction = (0, mongoose_1.model)('WalletTransaction', walletTransactionSchema);
module.exports = Wallettransaction;
