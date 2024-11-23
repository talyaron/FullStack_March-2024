import { createBrowserRouter } from "react-router-dom";
import HomePage from "./view/homePage/HomePage";
import About from "./view/about/About";
import ContactUs from "./view/contact-us/ContactUs";
import Menu from "./view/menu/Menu";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          index: true,
          // element: <Menu />,
        },
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
      ]
    },

  ]);