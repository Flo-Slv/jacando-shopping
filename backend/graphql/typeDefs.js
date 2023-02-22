const typeDefs = `
  type Product {
    id: ID!
    description: String!
    createdAt: String!
    stock: Int!
    type: String!
  }

  type Query {
    getProducts: [Product]
		getProduct(productId: ID!): Product
  }
`;

export default typeDefs;
