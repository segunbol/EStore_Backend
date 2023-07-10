import { Schema, PaginateModel, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IProduct } from "../utils/types";

const ProductSchema = new Schema<IProduct>(
  {
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
      type: Schema.Types.ObjectId,
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
  },
  {
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
  }
);

ProductSchema.plugin(paginate);
const Product = model<IProduct, PaginateModel<IProduct>>(
  "Product",
  ProductSchema
);

export = Product;
