import React from "react";
import ReactDOM from "react-dom/client";
import BelajarState from "./State";
import Props from "./Props";
import ConditionalRendering from "./ConditionalRendering";
import UseRefVsUseState from "./UseRefVsUseState";
import BelajarUseRef from "./BelajarUseRef";
import FetchCRUD from "./FetchCRUD";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FetchCRUD />
  </React.StrictMode>
);
