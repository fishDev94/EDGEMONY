import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Aboutus from "./pages/aboutus/aboutus";
import Catalog from "./pages/catalog/catalog";
import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/error/error";
import Recipe from "./pages/recipe";
import Ingredients from "./components/ingredients";
import Instruction from "./components/instruction";
import Player from "./components/player/player";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/catalog/:categoryName">
          <Route index element={<Catalog />} />
          <Route path=":recipeName/:id" element={<Recipe />}>
            <Route path="" element={<Navigate to="./ingredients" />} />
            <Route path="ingredients" element={<Ingredients />} />
            <Route path="instructions" element={<Instruction />} />
            <Route path="video" element={<Player />} />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
