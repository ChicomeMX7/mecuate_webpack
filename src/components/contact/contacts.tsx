import React from "react";

function Contacts(props) {
	return (
		<div>
			<h1 id="pepen">{props.name}</h1>
			<h4>this is just a greeting</h4>
			<span id="pepev">Value: {props.value}</span>
		</div>
	);
}

export { Contacts };
