import React from "react";
import ReactDOM from "react-dom/client";
import State from "./State";
import Props from "./Props";
import ConditionalRendering from "./ConditionalRendering";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConditionalRendering />
  </React.StrictMode>
);
