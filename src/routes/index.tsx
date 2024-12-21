import { createBrowserRouter } from "react-router-dom";
import Callback from "../pages/Callback";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Letter from "../pages/letter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
  {
    path: "/letter",
    element: <Letter />,
  },
]);
