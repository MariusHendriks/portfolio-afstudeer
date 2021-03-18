import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ReactTooltip from "react-tooltip";

ReactDOM.render(
  <Router>
    <ReactTooltip />
    <App />
  </Router>,
  document.getElementById("root")
);
