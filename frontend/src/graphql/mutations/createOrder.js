import { gql } from "@apollo/client";

const CREATE_ORDER = gql`
  mutation CreateOrder(
    $userName: String!
    $currency: String!
    $totalPrice: Float!
    $products: [ProductOrder!]!
  ) {
    createOrder(
      userName: $userName
      currency: $currency
      totalPrice: $totalPrice
      products: $products
    ) {
      id
      createdAt
      totalPrice
      products {
        id
        productId
        category
        count
        unitPrice
      }
    }
  }
`;

export default CREATE_ORDER;
