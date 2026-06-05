import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CursorGlow } from "./components/effects/CursorGlow";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CursorGlow />
    <App />
  </React.StrictMode>,
);
