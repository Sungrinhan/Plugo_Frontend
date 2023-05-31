import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Layout from "components/Layout";
import {
  ProductsPage,
  AddProductPage,
  ProductDetailPage,
  CartPage,
} from "pages";

const RouterComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Navigate to="/products" replace />,
        },
        {
          path: "/products",

          element: <ProductsPage />,
        },
        {
          path: "/products/add",
          element: <AddProductPage />,
        },
        {
          path: "/products/:productId/:productName",
          element: <ProductDetailPage />,
        },
        {
          path: "/products/cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterComponent;
