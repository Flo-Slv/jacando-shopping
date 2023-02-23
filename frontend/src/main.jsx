import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Loader from "./components/Loader.jsx";

import "./styles/index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/vegetables",
    element: <App />,
  },
  {
    path: "/fruits",
    element: <App />,
  },
  {
    path: "/cheeses",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} fallbackElement={<Loader />} />
  </ApolloProvider>
);
