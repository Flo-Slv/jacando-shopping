import { model, Schema } from "mongoose";

const productSchema = new Schema({
  price: Number,
  description: String,
  createdAt: String,
  stock: Number,
  type: String,
});

export default model("Product", productSchema);
