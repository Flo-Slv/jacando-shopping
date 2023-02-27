import { useState } from "react";
import { useQuery } from "@apollo/client";
import clsx from "clsx";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import GET_PRODUCTS_BY_CATEGORY from "../graphql/queries/getProductsByCategory.js";

import useStore from "../utils/zustand/store.js";

import Loader from "./Loader.jsx";
import Success from "./Success.jsx";
import Error from "./Error.jsx";

const Products = ({ cat }) => {
  const [displaySuccess, setDisplaySuccess] = useState({
    display: Boolean(false),
    type: "",
    message: "",
  });

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { category: cat },
  });

  const addToCart = useStore((state) => state.addToCart);
  const refetchQueries = useStore((state) => state.refetchQueries);

  if (loading) return <Loader />;

  if (error) return <Error error={error} />;

  if (refetchQueries) refetch({ category: cat });

  const handleClickCart = (id, name, category, unitPrice) => {
    addToCart(id, name, category, unitPrice);

    setDisplaySuccess({
      display: Boolean(true),
      type: "addToCart",
      message: name,
    });
  };

  return (
    <div
      className={clsx(
        "h-full w-full m-4 flex flex-wrap items-start justify-start",
        "rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll"
      )}
    >
      {data &&
        data?.getProductsByCategory.map(
          ({ id, name, description, category, picture, unitPrice, stock }) => (
            <div
              key={id}
              className="w-full sm:w-1/3 md:w-1/4 xl:w-1/5 2xl:w-1/6 mb-14"
            >
              <div
                className={clsx(
                  "block overflow-hidden rounded-lg",
                  "bg-white shadow-md hover:shadow-xl"
                )}
              >
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={picture}
                    alt={name}
                  />
                </div>

                <div className="p-4">
                  <span
                    className={clsx(
                      "inline-block px-2 py-1",
                      "bg-orange-200 text-orange-800 rounded-full",
                      "leading-none tracking-wide text-xs font-semibold uppercase"
                    )}
                  >
                    {category}
                  </span>

                  <h2 className="mt-2 mb-2 font-bold">{name}</h2>

                  <p className="text-sm">{description}</p>

                  <div className="mt-3 flex items-center">
                    <span className="font-bold text-xl">{unitPrice}</span>
                    &nbsp;
                    <span className="text-sm font-semibold">€ / unit</span>
                  </div>

                  <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">
                      {stock} in stock
                    </span>
                  </div>
                </div>

                <div
                  className={clsx(
                    "p-2 border-t border-b",
                    "text-xs text-gray-700 hover:cursor-pointer"
                  )}
                  onClick={() => handleClickCart(id, name, category, unitPrice)}
                >
                  <span className="flex items-center justify-center">
                    <ShoppingCartIcon />
                  </span>
                </div>
              </div>
            </div>
          )
        )}

      {displaySuccess.display && (
        <Success
          type="addToCart"
          message={displaySuccess.message}
          setDisplaySuccess={setDisplaySuccess}
        />
      )}
    </div>
  );
};

export default Products;
