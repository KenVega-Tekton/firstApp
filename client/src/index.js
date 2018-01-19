import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/js/bootstrap.js";

import React from "react";
import ReactDom from "react-dom";

import App from "./components/App";

//reactDom(componente principal[App], donde lo pondras en el dom)
ReactDom.render(<App />, document.querySelector("#root"));
