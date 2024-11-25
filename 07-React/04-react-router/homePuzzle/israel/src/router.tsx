import { createBrowserRouter } from "react-router-dom";
import Page1 from "./view/page1/Page1";
import Page2 from "./view/page2/Page2";
import Pasta from "./view/components/elements/Pasta";
import Pizzas from "./view/components/elements/Pizzas";
import Soups from "./view/components/elements/Soups";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element:<Page2 />,
    children:[
     
      {
        element:<Pasta />,
        path:"element-pasta"
      },

      {
        element:<Soups />,
        path:"element-soups"
      },

      {
        element:<Pizzas />,
        path:"element-pizzas"
      }
    ]
  }
  ]);