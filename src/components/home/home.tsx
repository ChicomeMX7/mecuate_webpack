///<reference  path="../../../src/typings/main.d.ts"/>

import React from "react";
import ReactDom from "react-dom";
import { Hello } from "./hello";
import { World } from "./world";
import "../../styles/main.sass";

const appElement = document.getElementById("root");

ReactDom.render(<Hello color="skyblue" />, appElement);
