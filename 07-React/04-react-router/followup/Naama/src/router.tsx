import { createBrowserRouter, Link } from "react-router-dom";
import ElementA from "./page2/sub/ElementA";
import ElementB from "./page2/sub/ElementB";
import Page1 from "./page1/Page1";
import Page2 from "./page2/Page2";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!<Link to="/page2">to page2</Link>
        <Link to="/page1">to page1</Link></div>,
    },
    {
        path: "/page1",
        element: <Page1 />,
    },
    {
        path: "/page2",
        element: <Page2 />,
        children:[
            {
                element:<div>Home thingie</div>,
                index:true
            },
            {
                element:<ElementA />,
                path:"element-a"
            },
            {
                element:<ElementB />,
                path:"element-b"
            }
    
        ],
    },
  ]);