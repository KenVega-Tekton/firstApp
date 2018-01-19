import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDom from "react-dom";

import App from "./components/App";

//reactDom(componente principal[App], donde lo pondras en el dom)
ReactDom.render(<App />, document.querySelector("#root"));
