import mongoose from "mongoose";

const productSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantityAvailable: {
    type: Number,
  },
  costUnity: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  carts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
});

const ProductModel = mongoose.model("Product", productSchema);
const ProductUpdateParams: string[] = [
  "name",
  "quantityAvailable",
  "costUnity",
];

export { ProductModel, ProductUpdateParams };
