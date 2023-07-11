import { Method } from "axios";
import { ObjectId } from "mongoose";

export interface Info {
  [key: string]: string | boolean | ObjectId | undefined | number;
}

export interface IUser {
  first_name: String;
  last_name: String;
  email: String;
  passwordHash: String;
  phone: Number;
  isAdmin: Boolean;
  street: String;
  apartment: String;
  zip: String;
  city: String;
  country: String;
}

export interface IStore {
  name: string;
  address: string;
  code: number;
}

export interface ICategory {
  store_Id?: ObjectId;
  name: string;
  image: string;
}

export interface IProduct {
  store_Id?: ObjectId;
  category?: ObjectId;
  name: String;
  slug: String;
  description: String;
  Description: String;
  image: String;
  images: String;
  brand: String;
  price: Number;
  countInStock: Number;
  rating: Number;
  numReviews: Number;
  isFeatured: Boolean;
}

export interface IOrderItems {
  quantity: Number;
  product: ObjectId;  
}

export interface IOrder {
  user_id?: ObjectId;
  store_Id?: ObjectId;
  orderItems?: ObjectId;
  shippingAddress1: String;
  shippingAddress2: String;
  city: String;
  zip: String;
  country:String;
  phone: String;
  status: String;
  totalPrice: Number;
}

export interface IUserWallet {
  store_id?: ObjectId;
  user_id?: ObjectId;
  wallet_number: number;
  balance: number;
}

export interface IWalletTransaction {
  receiverUser_Id: ObjectId;
  senderUser_Id: ObjectId;
  wallet_number: ObjectId;
  amount: number;
  type: string;
}

export interface IWalletPurchaseHist {
  store_id?: ObjectId;
  user_id?: ObjectId;
  amount: Number;
  order: ObjectId;
}

