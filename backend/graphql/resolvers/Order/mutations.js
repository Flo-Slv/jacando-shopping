import Product from "../../../models/Product.js";
import Order from "../../../models/Order.js";

const orderMutations = {
  Mutation: {
    createOrder: async (_, { userName, currency, totalPrice, products }) => {
      try {
        // To avoid duplicate products.
        const productsWithoutDuplicate = products.filter(
          (product, index, initialArray) => {
            return (
              index ===
              initialArray.findIndex((el) => {
                return el.productId === product.productId;
              })
            );
          }
        );

        // // Check if product exist in DB. If not, throw error.
        productsWithoutDuplicate.forEach((product) => {
          Product.findById(product.productId, (err) => {
            if (err)
              throw new Error(
                `Product ${product.productId} does not exist in DB !`
              );
          });
        });

        // If all products exist, update each product stock in DB.
        productsWithoutDuplicate.forEach(async (product) => {
          const prod = await Product.findById(product.productId);

          const stock = prod.stock;
          prod.stock = stock - product.count;

          await prod.save();
        });

        // Create order in DB.
        const newOrder = new Order({
          userName: userName,
          createdAt: new Date().toISOString(),
          currency: currency,
          totalPrice: totalPrice,
          products: productsWithoutDuplicate,
        });

        const order = await newOrder.save();

        return order;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default orderMutations;
