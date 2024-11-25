import { createBrowserRouter } from "react-router-dom";
import Page1 from "./view/page1/Page1";
import Page2 from "./view/page2/Page2";
import Home from "./view/components/elements/Home";
import Contents from "./view/components/elements/Contents";
import About from "./view/components/elements/About";

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
            element:<div>Start</div>,
            index:true
        },
        {
          element:<div>Start</div>,
          index:true
      },
      {
        element:<Home />,
        path:"element-home"
      },

      {
        element:<Home />,
        path:"element-contents"
      },

      {
        element:<Home />,
        path:"element-about"
      }
    ]
  }
  ]);