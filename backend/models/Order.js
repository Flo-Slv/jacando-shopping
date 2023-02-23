import { model, Schema } from "mongoose";

// TODO:
// Relation with Product !
const orderSchema = new Schema({
  username: String,
  totalPrice: Number,
  currency: String,
  // products: [],
  createdAt: String,
});

export default model("Order", orderSchema);
