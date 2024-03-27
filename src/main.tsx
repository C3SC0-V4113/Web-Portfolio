import React from "react";
import ReactDOM from "react-dom/client";
import { WebPortfolioApp } from "./WebPortfolioApp";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "./components/ui/toaster";
import "./index.css";

import "../i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <WebPortfolioApp />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
