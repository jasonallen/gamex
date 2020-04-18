import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import game from "./game";

const rootElement = document.getElementById("react-container");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
