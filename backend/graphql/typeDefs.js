const typeDefs = `#graphql
  type Product {
    id: ID!
		name: String!
    description: String!
    unitPrice: Float!
    stock: Int!
    category: String!
		picture: String!
  }

  type Query {
    getProducts: [Product!]
		getProductById(productId: ID!): Product
		getProductsByCategory(offset: Int!, limit: Int!, category: String!): [Product!]
  }
`;

export default typeDefs;
