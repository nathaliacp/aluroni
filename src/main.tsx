import "normalize.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./pages/Menu/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Menu/>
  </React.StrictMode>,
);
