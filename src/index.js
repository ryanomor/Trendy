import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import App from "./App";
import { Router } from "react-router";

import "assets/scss/material-kit-react.css";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <App />
  </Router>,
  document.getElementById("root")
);
