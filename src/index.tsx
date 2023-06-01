import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import { Provider } from "react-redux";

import initMocks from "./mocks";
import RouterComponent from "./router";
import { store } from "./store";

const delayMSW = async () => {
  if (process.env.NODE_ENV === "development") {
    return await initMocks();
  }
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

delayMSW().then(() =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    </React.StrictMode>,
  ),
);
