import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  clearCart: () =>
    set((state) => {
      return {
        ...state,
        cart: [],
      };
    }),
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
              total: Math.round(unitPrice * (product.count + 1) * 100) / 100,
            }
          : product
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }),
  removeFromCart: (id, unitPrice) =>
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
            ? {
                ...product,
                count: Math.max(product.count - 1, 0),
                total: Math.round(unitPrice * (product.count - 1) * 100) / 100,
              }
            : product
        )
        .filter((product) => product.count);

      return {
        ...state,
        cart: updatedCart,
      };
    }),
  refetchQueries: Boolean(false),
  setRefetchQueries: (status) =>
    set((state) => {
      return {
        ...state,
        refetchQueries: status,
      };
    }),
}));

export default useStore;
