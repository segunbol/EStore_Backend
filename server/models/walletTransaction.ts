import { Schema, PaginateModel, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IWalletTransaction } from "../utils/types";

const walletTransactionSchema = new Schema<IWalletTransaction>({

receiverUser_Id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  senderUser_Id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  wallet_number: {
    type: Schema.Types.ObjectId,
    ref:"Wallet",
    required: true,
  },
  type: {
    type: String,
    enum: ["credit", "debit"],
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
});

walletTransactionSchema.plugin(paginate);
const Wallettransaction = model<IWalletTransaction, PaginateModel<IWalletTransaction>>('WalletTransaction', walletTransactionSchema);

export = Wallettransaction;