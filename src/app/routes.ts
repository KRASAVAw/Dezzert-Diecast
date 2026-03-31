import { createHashRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./Home";
import { Shop } from "./Shop";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "*", Component: Home },
    ],
  },
]);
