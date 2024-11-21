import { createBrowserRouter } from "react-router-dom";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/page1",
        element: <Page1 />,
    },
    {
        path: "/page2",
        element: <Page2 />,
    },
  ]);