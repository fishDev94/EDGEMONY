import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutus from "./pages/aboutus/aboutus";
import Catalog from "./pages/catalog/catalog";
import Error from "./pages/error/error";
import Recipe from "./pages/recipe";
import Ingredients from "./components/ingredients";
import Instruction from "./components/instruction";
import Player from "./components/player/player";
import Homepage from "./pages/homepage";
import { ENDPOINT } from "./utils/api/endpoints";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />,
        loader: async () => {
          return fetch(ENDPOINT.CATEGORY);
        },
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/catalog/:categoryName",
        children: [
          {
            path: "",
            element: <Catalog />,
            loader: async ({ params }) => {
              return fetch(`${ENDPOINT.FILTER}?c=${params.categoryName}`);
            },
          },
          {
            path: ":recipeName/:id",
            element: <Recipe />,
            loader: async ({ params }) => {
              return fetch(`${ENDPOINT.LOOKUP}?i=${params.id}`);
            },
            children: [
              {
                path: "",
                element: <Navigate to="./ingredients" />,
              },
              {
                path: "ingredients",
                element: <Ingredients />,
              },
              {
                path: "instructions",
                element: <Instruction />,
              },
              {
                path: "video",
                element: <Player />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
