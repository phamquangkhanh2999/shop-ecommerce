import Catalog from "../containers/catalog/Catalog";
import Home from "../containers/home/Home";
import NotFound from "../containers/error/NotFound";
import Cart from "../containers/cart/Cart";
import Product from "../containers/product/Product";
import Order from "../containers/order/Order";
import Payment from "../containers/payment/Payment";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/catalog",
    exact: false,
    element: <Catalog />,
  },
  {
    path: "/catalog/:slug",
    exact: false,
    element: <Product />,
  },
  {
    path: "/cart",
    exact: false,
    element: <Cart />,
  },
  {
    path: "/checkout",
    exact: false,
    element: <Order />,
  },
  {
    path: "/order-complete",
    exact: false,
    element: <Payment />,
  },
  {
    path: "*",
    exact: false,
    element: <NotFound />,
  },
];

export default routes;
