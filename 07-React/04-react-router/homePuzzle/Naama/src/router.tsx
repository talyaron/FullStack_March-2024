import { createBrowserRouter } from "react-router-dom";
import Page0 from "./view/page0/Page0";
import Choice1 from "./view/page0/Choice1";
import Choice2 from "./view/page0/Choice2";
import Choice0 from "./view/page0/Choice0";
import Choice3 from "./view/page0/Choice3";
import Choice4 from "./view/page0/Choice4";
import Choice5 from "./view/page0/Choice5";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page0 />,
    children: [
      {
        element: <Choice1 />,
        path: "choice1",
        children: [
          {
            element: <Choice4 />,
            path: "choice4",
            children: [
              {
                element: <Choice5 />,
                path: "choice5",
                children: [
                  {
                    element: <Choice0 />,
                    path: "choice0",
                  },
                ],
              },
              {
                element: <Choice0 />,
                path: "choice0",
              },
            ],
          },
          {
            element: <Choice0 />,
            path: "choice0",
          },
          {
            element: <Choice0 />,
            path: "choice0",
          },
        ],
      },
      {
        element: <Choice2 />,
        path: "choice2",
        children: [
          {
            element: <Choice0 />,
            path: "choice0",
          },
          {
            element: <Choice0 />,
            path: "choice0",
          },
          {
            element: <Choice0 />,
            path: "choice0",
          },
        ],
      },
      {
        element: <Choice3 />,
        path: "choice3",
        children: [
          {
            element: <Choice5 />,
            path: "choice5",
            children: [
                {
                  element: <Choice0 />,
                  path: "choice0",
                },
              ],
          },
          {
            element: <Choice0 />,
            path: "choice0",
          },
          {
            element: <Choice0 />,
            path: "choice0",
          },
        ],
      },
    ],
  },
]);
// children: [
//     {
//       element: <Choice0 />,
//       path: "choice0",
//     },
//     {
//       element: <Choice0 />,
//       path: "choice0",
//     },
//     {
//       element: <Choice0 />,
//       path: "choice0",
//     },
//   ],
