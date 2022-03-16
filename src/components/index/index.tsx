///<reference  path="../../../src/typings/main.d.ts"/>

import React from "react";
import ReactDom from "react-dom";
import { LandingPage } from "./LandingPage";

const anchor = document.getElementById("root");
// const anchor = document.body;
ReactDom.render(<LandingPage/>, anchor);