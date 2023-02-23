const typeDefs = `
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
    getProducts: [Product]
		getProductById(productId: ID!): Product
		getProductsByCategory(category: String!): [Product]
  }
`;

export default typeDefs;
