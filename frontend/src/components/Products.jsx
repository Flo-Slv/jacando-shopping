import { useQuery } from "@apollo/client";
import clsx from "clsx";

import GET_PRODUCTS_BY_CATEGORY from "../graphql/queries/getProductsByCategory.js";

import Loader from "../components/Loader.jsx";
import Error from "./Error.jsx";

const Products = ({ cat }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { category: cat },
  });

  if (loading) return <Loader />;

  if (error) return <Error error={error} />;

  return (
    <div
      className={clsx(
        "h-full w-full m-4 flex flex-wrap items-start justify-start",
        "rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll"
      )}
    >
      {data &&
        data?.getProductsByCategory.map(
          ({ id, name, description, category, picture }) => (
            <div
              key={id}
              className={clsx(
                "w-96 h-60 rounded-lg flex-shrink-0 flex-grow",
                "bg-gray-400"
              )}
            ></div>
          )
        )}
    </div>
  );
};

export default Products;
