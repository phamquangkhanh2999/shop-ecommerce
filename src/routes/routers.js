import Catalog from "../containers/catalog/Catalog";
import Home from "../containers/home/Home";
import NotFound from "../containers/error/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "catalog",
    exact: false,
    element: <Catalog />,
  },
  {
    path: "*",
    exact: false,
    element: <NotFound />,
  },
];

export default routes;
