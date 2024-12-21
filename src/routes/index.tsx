import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Callback from "../components/Calback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
]);
