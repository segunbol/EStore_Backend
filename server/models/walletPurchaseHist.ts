import { Schema, PaginateModel, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IWalletPurchaseHist } from "../utils/types";

const WalletPurchaseHistSchema = new Schema<IWalletPurchaseHist>({
    store_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Store",
    },
    user_id:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
    amount:{
    type: Number
  },
    order: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Order"
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

WalletPurchaseHistSchema.plugin(paginate);
const WalletPurchaseHist = model<IWalletPurchaseHist, PaginateModel<IWalletPurchaseHist>>(
  "WalletPurchaseHist",
  WalletPurchaseHistSchema
);

export = WalletPurchaseHist