///<reference  path="../../../src/typings/main.d.ts"/>
import React from "react";
import { ReactDOM } from "react";
import "../../styles/main.sass";




function LandPage(props:Mecuate.Q ): Mecuate.LandingPage {
	let style_custom = `background:${props.color}`;
	let nameOfPage = `name_of_page${props.name.replaceAll(" ", "_")}`;
	let rename = props.lol;
	return (
		<div id={nameOfPage}>
			<h1>{props.name.toUpperCase()} for {rename}</h1>
			<h4 className="fiusha">Welcome to Landing Page for My Application</h4>
			<hr />
			<p>Test color is to be assigned:[{style_custom}]</p>
			<span>{new Date().toDateString()}</span>
			<span>Lovely dovey</span>
		</div>
	);
}

export { LandPage };
