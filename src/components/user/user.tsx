///<reference  path="../../../src/typings/main.d.ts"/>
import React from "react";
import ReactDOM from "react-dom";
import { Fun_trex_ } from "./user_component";

function GreetingUser(props) {
	return <div>this is just {props.name} a TEXT</div>;
}
let visual = (
	<GreetingUser name="A new">
		Hola
		<Fun_trex_ />
		World
	</GreetingUser>
);
ReactDOM.render(visual, document.getElementById("root"));
