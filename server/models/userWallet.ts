import { Schema, PaginateModel, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IUserWallet } from "../utils/types";

const walletSchema = new Schema<IUserWallet>(
  {
    store_id: {
      type: Schema.Types.ObjectId,
      required: true,
      Ref: "Store",
    },
    user_id: {
      type: Schema.Types.ObjectId,
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


walletSchema.plugin(paginate);
const Wallet = model<IUserWallet, PaginateModel<IUserWallet>>('Wallet', walletSchema);

export = Wallet;