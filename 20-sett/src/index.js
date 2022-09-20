import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createContext } from "react";
import { initialState } from "./constants/constants";

export const counterData = createContext(initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
