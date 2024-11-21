import {createBrowserRouter} from 'react-router-dom'
import Page1 from './view/page1/Page1';
import Page2 from './view/page2/Page2';
  import ElementA from './view/Components/ElementA/About';
  import ElementB from './view/Components/ElementB/ContactUs';
  import ElementC from './view/Components/ElementC/Home';
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Page1 />,
    },
    {
      path: "/page2",
      element:<Page2 />,
      children: [
        {
          element:<div>Start</div>,
          index:true
        },
        {
          element:<ElementA />,
          path:"About"
        },
        
        {
          element:<ElementB />,
          path:"ContactUs"
        },
        {
          element:<ElementC />,
          path:"Home"
        },
      ]
    }
  ]);
  
