import { createBrowserRouter } from "react-router-dom";
import Element1 from "./view/components/element1/Home";
import Page1 from "./view/page1/Page1";
import Page2 from "./view/page2/Page2";
import Element2 from "./view/components/element2/About";
import Element3 from "./view/components/element3/Contact";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/page1",
    element: <Page1 />,
    children: [
      {
        index: true, // Marks this as the default route for /page1
        element: <div>Start</div>,
      },
      {
        path: "home",
        element: <Element1 />,
      },
      {
        path: "about",
        element: <Element1 />,
      },
      {
        path: "contact",
        element: <Element1 />,
      },
    ],
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
]);