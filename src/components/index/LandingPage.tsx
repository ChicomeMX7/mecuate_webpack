import React from "react";
import { ReactDOM } from "react-dom";
import "../../styles/main.sass";
import { Footer } from "./footer";


function LandingPage(props: Mecuate.Props) {
	return (
		<div id="app">
			<Footer></Footer>
		</div>
	);
}

export { LandingPage };
