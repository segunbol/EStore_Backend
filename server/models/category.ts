import { Schema, PaginateModel, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { ICategory } from "../utils/types";

const CategorySchema = new Schema<ICategory>(
  { 
    store_Id: {
      type: Schema.Types.ObjectId,
      required: true,
      
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
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

CategorySchema.plugin(paginate);
const Category = model<ICategory, PaginateModel<ICategory>>(
  "Category",
  CategorySchema
);

export = Category;
