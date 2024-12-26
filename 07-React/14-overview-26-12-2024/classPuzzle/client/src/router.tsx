import { createBrowserRouter } from "react-router-dom";
import Main from "./view/pages/main/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        
    },
]);