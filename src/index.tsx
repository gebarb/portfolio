import React from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// Style.
import "normalize.css";
import "animate.css/animate.css";
import "./style.scss";
// Browser JS.
import "bootstrap/dist/js/bootstrap.min";
import "jquery.easing";

import { App } from "./App";

ReactDOM.render(<App></App>, document.getElementById("root"));
