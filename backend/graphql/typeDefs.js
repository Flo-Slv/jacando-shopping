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

	type OrderProduct {
		id: ID!
		productId: String!
		category: String!
		count: Int!
		unitPrice: Float!
	}

	type Order {
		id: ID!
		createdAt: String!
		currency: String
		totalPrice: Float!
		products: [OrderProduct!]
	}

	input ProductOrder {
		productId: String!
		category: String!
		count: Int!
		unitPrice: Float!
	}

  type Query {
    getProducts: [Product!]
		getProductById(productId: ID!): Product
		getProductsByCategory(offset: Int!, limit: Int!, category: String!): [Product!]
  }

	type Mutation {
		createOrder(userName: String!, currency: String!, totalPrice: Float!, products: [ProductOrder!]!): Order!
	}
`;

export default typeDefs;
