import { createBrowserRouter } from "react-router-dom";
import Main from "./view/pages/main/Main";
import LoginPage from "./view/pages/login/loginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        
    },
    {
        path: "/login",
        element: <LoginPage />,
    }
]);