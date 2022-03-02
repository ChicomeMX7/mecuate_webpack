///<reference  path="../../../src/typings/main.d.ts"/>

import React from "react";

function Contact_mainBox(setup: any) {
	let comp = {
		name: setup.name,
		color: setup.color,
	};

	return (
		<div>
			<div>Contact main box</div>
			<h1>call MECUATE today {new Date().toDateString()}</h1>
			<input id={`${comp.name}_box`} type="text" placeholder="Nombre" />
		</div>
	);
}

export {Contact_mainBox};