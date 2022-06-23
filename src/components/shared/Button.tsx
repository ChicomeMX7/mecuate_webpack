import React from "react";
import ReactDom from "react-dom";

function Button(props: Mecuate.LinkProps) {
	const action = {
		default: () => {
			console.log("default has been setup and clicked");
		},
	}[props.action || "default"];
	const clax = props.class ? props.class : "";

	return (
		<button onClick={action} className={clax}>
			{props.content}
		</button>
	);
}

export { Button };
