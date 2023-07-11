import { Schema, PaginateModel, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IOrderItems } from "../utils/types";

const OrderItemsSchema = new Schema<IOrderItems>({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
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
)

OrderItemsSchema.plugin(paginate);
const OrderItems = model<IOrderItems, PaginateModel<IOrderItems>>(
  "OrderItems",
  OrderItemsSchema
);

export = OrderItems