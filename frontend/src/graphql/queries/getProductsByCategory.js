import { gql } from "@apollo/client";

const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($offset: Int!, $limit: Int!, $category: String!) {
    getProductsByCategory(offset: $offset, limit: $limit, category: $category) {
      id
      name
      description
      category
      picture
      unitPrice
      stock
    }
  }
`;

export default GET_PRODUCTS_BY_CATEGORY;
