import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Store from "./store/Store";
import Commerce from "./Components/Commerce";
import Sections from "./Components/Sections";
import Admin_Dashboard, {
  handleAddProduct,
} from "./Components/Admin_Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Commerce />,
      children: [
        {
          path: "/",
          element: <Sections />,
        },
        {
          path: "/admin",
          element: <Admin_Dashboard />,
          action: handleAddProduct,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={Store}>
          <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
