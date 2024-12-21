import { createBrowserRouter } from "react-router-dom";
import Callback from "../pages/Callback";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Letter from "../pages/Letter";
import Nickname from "../pages/Nickname";
import Face from '../pages/Face'

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
  {
    path: "/nickname",
    element: <Nickname />,
  },
  {
    path: "/face",
    element: <Face />,
  },
]);
