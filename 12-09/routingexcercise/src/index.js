import React, { Suspense } from "react";
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
// import Recipe from "./pages/recipe";
import Ingredients from "./components/ingredients";
import Instruction from "./components/instruction";
import Player from "./components/player/player";
import Homepage from "./pages/homepage";
import { ENDPOINT } from "./utils/api/endpoints";

const root = ReactDOM.createRoot(document.getElementById("root"));
const LazyRecipe = React.lazy(() => import("./pages/recipe"));

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
        path: "/search/:searchName",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <LazyRecipe />
          </Suspense>
        ),
        loader: async ({ params }) => {
          return fetch(`${ENDPOINT.SEARCH}?s=${params.searchName}`);
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
            element: (
              <Suspense fallback={<div>loading...</div>}>
                <LazyRecipe />
              </Suspense>
            ),
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

console.log(router);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
