import productQueries from "./Product/queries.js";
import orderMutations from "./Order/mutations.js";

export default {
  Query: {
    ...productQueries.Query,
  },
  Mutation: {
    ...orderMutations.Mutation,
  },
};
