import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/main/Main-page";
import DishesPage from "./components/dishes/Dishes-page";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },

    {
       path: "/dishes",
       element: <DishesPage />
    }
    
    ]);

