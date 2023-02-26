import { model, Schema } from "mongoose";

const orderSchema = new Schema({
  userName: String,
  createdAt: String,
  currency: String,
  totalPrice: Number,
  products: [
    {
      productId: String,
      category: String,
      count: Number,
      unitPrice: Number,
    },
  ],
});

export default model("Order", orderSchema);
