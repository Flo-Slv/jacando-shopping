import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      name
      description
      category
      picture
    }
  }
`;

export default GET_PRODUCTS;
