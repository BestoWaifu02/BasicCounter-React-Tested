import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
//import PrimerApp from "./PrimerApp";
import "./index.css";
const divRoot = document.querySelector("#root");

//ReactDOM.render(<PrimerApp saludo="Hola soy Diego" />, divRoot);

ReactDOM.render(<CounterApp value={100} />, divRoot);
