import { gql } from "@apollo/client";

const GET_PRODUCT_BY_ID = gql`
  query GetProductById($productId: ID!) {
    getProductById(productId: $productId) {
      id
      name
      description
      category
      picture
    }
  }
`;

export default GET_PRODUCT_BY_ID;
