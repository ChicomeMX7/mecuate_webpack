/**
 * @param { --TYPINGS-- }
 */
///<reference  path="../../../src/typings/main.d.ts"/>
/**
 * @param { --COMPONENTS-- }
 */
import React from "react";
import ReactDom from "react-dom";
import "../../styles/main.sass";

function Hei(props) {
	return (
		<div>
			<h1 id="name_of_title">{props.name}</h1>
			<h4>RECIEVING THE PARAMETER</h4>
			<span>{new Date().toDateString()}</span>
		</div>
	);
}

const appElement = document.getElementById("app");

ReactDom.render(<Hei name="green" />, appElement);
