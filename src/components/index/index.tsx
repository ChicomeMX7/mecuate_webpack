/**
 * @param { --TYPINGS-- }
 */
///<reference  path="../../../src/typings/main.d.ts"/>
/**
 * @param { --COMPONENTS-- }
 */
import React from "react";
import ReactDom from "react-dom";
import { LandPage } from "./LandPage";

// execution

const appElement = document.getElementById("root");

ReactDom.render(<LandPage name={"land page"} color="green" lol="pepe" />, appElement);
