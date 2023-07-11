import { Schema, PaginateModel, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IOrder } from "../utils/types";

const OrderSchema = new Schema<IOrder>({
    store_Id: {
        type: Schema.Types.ObjectId,
        ref: "Store",
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    orderItems: [{
        type: Schema.Types.ObjectId,
        ref: 'OrderItem',
        required:true
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
  })

OrderSchema.plugin(paginate);
const Order = model<IOrder, PaginateModel<IOrder>>(
  "Order",
  OrderSchema
);

export = Order;