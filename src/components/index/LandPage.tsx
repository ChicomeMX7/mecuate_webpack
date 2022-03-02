import React from "react";
import { ReactDOM } from "react";

function LandPage(props) {
	let style_custom = `background:${props.color}`;
	let nameOfPage = `name_of_page${props.name.replaceAll(" ", "_")}`;
	return (
		<div id={nameOfPage}>
			<h1>{props.name.toUpperCase()}</h1>
			<h4>Welcome to Landing Page for application</h4>
			<hr />
			<p>Test color is to be assigned:[{style_custom}]</p>
			<span>{new Date().toDateString()}</span>
		</div>
	);
}

export { LandPage };
