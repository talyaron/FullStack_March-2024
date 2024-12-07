import { createBrowserRouter } from "react-router-dom";
import HomePage from './views/pages/HomePage'
import React from "react";
import App from "./App";

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/HomePage', element: <HomePage /> },

  ]);
  