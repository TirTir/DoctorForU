import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { IsLoginProvider } from "./hooks";
import { Router } from "./router";

import ReactModal from 'react-modal';
import "./styles/globals.css";

ReactModal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IsLoginProvider>
    <Router />
  </IsLoginProvider>
);

reportWebVitals();
