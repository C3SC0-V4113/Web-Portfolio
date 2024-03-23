import React from "react";
import ReactDOM from "react-dom/client";
import { WebPortfolioApp } from "./WebPortfolioApp";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

import "../i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <WebPortfolioApp />
    </Provider>
  </React.StrictMode>
);
