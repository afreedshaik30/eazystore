import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.jsx";
import App from "./App.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/men", element: <ProductListPage categoryType="MEN" /> },
      { path: "/women", element: <ProductListPage categoryType="WOMEN" /> },
      { path: "/kids", element: <ProductListPage categoryType="KIDS" /> },

      { path: "*", element: <NotFoundPage /> }, // 404 page
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
