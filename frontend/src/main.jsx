import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Loader from "./components/Loader.jsx";

import "./styles/index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/vegetables" element={<div>Vegetables</div>} />
      <Route path="/fruits" element={<div>Fruits</div>} />
      <Route path="/cheeses" element={<div>Cheeses</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} fallbackElement={<Loader />} />
  </ApolloProvider>
);
