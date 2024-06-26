import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import Product from "./Pages/Category/Product"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        // Category Page
        path:"/products/:id",
        element:<Products />
      },
      {
        // Individual Product Page
        path:"/product/:id",
        element:<Product />
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App