import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  description: String,
  unitPrice: Number, // Float
  stock: Number,
  category: {
    type: String,
    enum: ["vegetable", "fruit", "cheese"],
  },
  picture: String,
});

export default model("Product", productSchema);
