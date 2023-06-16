import mongoose from "mongoose";

const cartSchema: mongoose.Schema = new mongoose.Schema({
  quantity: {
    type: Number,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const CartModel = mongoose.model("Cart", cartSchema);
const CartUpdateParams: string[] = ["quantity"];

export { CartModel, CartUpdateParams };
