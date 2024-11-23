import { createBrowserRouter } from "react-router-dom";
import HomePage from "./view/homePage/HomePage";
import Menu from "./view/menu/Menu";
import DishList from "./view/dishesPage/DishList";
import DishCard from "./view/dishesPage/DishCart";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/menu",
    element: <Menu />,
    children: [
      {
        index: true,
        element: <DishList />,
      },
      {
        path: ":category",
        element: <DishList />,
        children: [
          {
            index: true,
          },
          {
            path: ":dishId",
            element: <DishCard />,
          },
        ]
      }
    ]
  },

]);