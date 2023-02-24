import { gql } from "@apollo/client";

const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($category: String!) {
    getProductsByCategory(category: $category) {
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
