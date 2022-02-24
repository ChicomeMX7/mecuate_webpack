/**
 * @param { --TYPINGS-- }
 */
///<reference  path="../../../src/typings/main.d.ts"/>
/**
 * @param { --COMPONENTS-- }
 */
import React from "react";
import ReactDom from "react-dom";
import Hello from "./hello";
import World from "./world";
import '../../styles/main.sass';
/**
 * @param { --PLUG-IN's-- }
 */
// require('file-loader?name=[name].[ext]!./pages/index.html');

/**
 * @param { --CODE-- }
 */

const appElement = document.getElementById("app");


ReactDom.render(<Hello color="skyblue"/>, appElement);

