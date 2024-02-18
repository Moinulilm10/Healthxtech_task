import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx/Home";
import SingleProductPage from "./components/Products/SingleProductPage";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          loader: async ({ params }) => {
            return fetch(`https://dummyjson.com/products/${params.id}`);
          },
          element: <SingleProductPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
