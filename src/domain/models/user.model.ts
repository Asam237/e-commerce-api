import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["ADMIN", "METIER"], default: "METIER" },
  createdAt: { type: Date, default: Date.now() },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);
const UserUpdateParams: string[] = ["fullname", "password"];

export { UserModel, UserUpdateParams };
