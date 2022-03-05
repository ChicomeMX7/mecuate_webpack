///<reference  path="../../../src/typings/main.d.ts"/>
import React from "react";

function Hello(props) {
	return (
		<div>
			<h1 className={props.color}>MECUATE foul {new Date().toDateString()} page</h1>
		</div>
	);
}

export { Hello };
