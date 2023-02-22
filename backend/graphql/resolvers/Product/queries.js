import Product from "../../../models/Product.js";

const productQueries = {
  Query: {
    getProducts: async () => {
      try {
        const products = await Product.find();

        return products;
      } catch (err) {
        throw new Error(err);
      }
    },
    getProduct: async (_, { productId }) => {
      try {
        const product = await Product.findById(productId);

        if (product) return product;
        else throw new Error("Product not found !");
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default productQueries;
