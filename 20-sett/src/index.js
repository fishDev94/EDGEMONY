import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { createContext } from "react";
// import { initialState } from "./constants/constants";
import { Provider } from "react-redux";
import store from "./components/store";

// export const counterData = createContext(initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
