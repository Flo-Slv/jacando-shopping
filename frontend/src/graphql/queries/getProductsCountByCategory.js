import { gql } from "@apollo/client";

const GET_PRODUCTS_COUNT_BY_CATEGORY = gql`
  query GetProductsCountByCategory($category: String!) {
    getProductsCountByCategory(category: $category)
  }
`;

export default GET_PRODUCTS_COUNT_BY_CATEGORY;
