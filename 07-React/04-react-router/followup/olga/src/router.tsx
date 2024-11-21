import { createBrowserRouter } from "react-router-dom";
import Page1 from "./view/page1/Page1";
import Page2 from "./view/page2/Page2";
import HomePage from "./view/homePage/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />},
    {
      path: "/page1",
      element: <Page1 />,
    },
    {
      path: "/page2",
      element: <Page2 />,
    },
  ]);