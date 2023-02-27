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
    getProductById: async (_, { productId }) => {
      try {
        const product = await Product.findById(productId);

        if (product) return product;
        else throw new Error("Product not found !");
      } catch (err) {
        throw new Error(err);
      }
    },
    getProductsByCategory: async (_, { offset, limit, category }) => {
      try {
        const products = await Product.find(
          { category: category },
          null, // optional fields to return
          {
            skip: offset,
            limit: limit,
          }
        );

        if (products) return products;
        else throw new Error("Category not found !");
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default productQueries;
