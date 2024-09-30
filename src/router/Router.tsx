// router.tsx
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Products from "../layout/product/addProduct/Products";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Products></Products>
          </>
        ),
      },
    ],
  },
]);

export default router;
