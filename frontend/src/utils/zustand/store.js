import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (id, name, category, unitPrice) =>
    set((state) => {
      const isPresent = state.cart.find((product) => product.id === id);

      if (!isPresent) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id,
              name,
              category,
              count: 1,
              unitPrice: unitPrice,
              total: unitPrice,
            },
          ],
        };
      }

      const updatedCart = state.cart.map((product) =>
        product.id === id
          ? {
              ...product,
              count: product.count + 1,
              total: unitPrice * (product.count + 1),
            }
          : product
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const isPresent = state.cart.findIndex((product) => product.id === id);

      if (isPresent === -1) {
        return {
          ...state,
        };
      }

      const updatedCart = state.cart
        .map((product) =>
          product.id === id
            ? { ...product, count: Math.max(product.count - 1, 0) }
            : product
        )
        .filter((product) => product.count);

      return {
        ...state,
        cart: updatedCart,
      };
    }),
}));

export default useCart;