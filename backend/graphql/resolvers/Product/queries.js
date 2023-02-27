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
        if (productId.trim() === "")
          throw new Error("Product ID can not be empty !");

        const product = await Product.findById(productId);

        if (product) return product;
        else throw new Error("Product not found !");
      } catch (err) {
        throw new Error(err);
      }
    },
    getProductsCountByCategory: async (_, { category }) => {
      try {
        if (category.trim() === "")
          throw new Error("Category can not be empty !");

        const count = await Product.where({
          category: category.trim(),
        }).countDocuments();

        return count;
      } catch (err) {
        throw new Error(err);
      }
    },
    getProductsByCategory: async (_, { offset, limit, category }) => {
      try {
        if (category.trim() === "")
          throw new Error("Category can not be empty !");

        if (offset < 0) throw new Error("Offset can not be negative !");

        if (limit < 0) throw new Error("Limit can not be negative !");

        const products = await Product.find(
          { category: category.trim() },
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
