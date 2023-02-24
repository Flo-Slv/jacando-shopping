import ReactDOMServer from "react-dom/server";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StaticRouter } from "react-router-dom/server";

import Layout from "./components/Layout.jsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <ApolloProvider client={client}>
      <StaticRouter location={url} context={context}>
        <Layout />
      </StaticRouter>
    </ApolloProvider>
  );
}
