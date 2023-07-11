"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
        },
    ],
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Category",
    },
    countInStock: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    numReviews: {
        type: Number,
    },
    isFeatured: {
        type: Boolean,
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
ProductSchema.plugin(mongoose_paginate_v2_1.default);
const Product = (0, mongoose_1.model)("Product", ProductSchema);
module.exports = Product;
