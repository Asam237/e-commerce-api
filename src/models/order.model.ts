import mongoose from "mongoose";

const orderSchema: mongoose.Schema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const OrderModel = mongoose.model("Order", orderSchema);
const OrderUpdateParams: string[] = ["status"];

export { OrderModel, OrderUpdateParams };
