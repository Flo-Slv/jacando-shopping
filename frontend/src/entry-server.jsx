import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import Layout from "./components/Layout.jsx";

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <Layout />
    </StaticRouter>
  );
}
