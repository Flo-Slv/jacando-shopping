import { model, Schema } from "mongoose";

// TODO:
// Relation with Product !
const orderSchema = new Schema({
  createdAt: String,
});

export default model("Order", orderSchema);
