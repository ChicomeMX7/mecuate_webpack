
import { Contacts } from "../../../../src/client/components/contact/contact";
import * as ReactDOM from "react-dom";
import React from "react";

describe("Testing component", () => {
	let container: HTMLDivElement;
	beforeEach(() => {
		container = document.createElement("div");
		container.setAttribute('id','root');
		document.body.appendChild(container);
		ReactDOM.render(<Contacts value="3" name="greet"/>, container);
	});

	afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

	test("Actual component properties", () => {
		// ARANGE
        let result1 = container.querySelector('#pepen').innerHTML;
        let result2 = container.querySelector('#pepev').innerHTML;
		
		// ACT
		
		// ASSERT
		expect(result1).toBe('greet');
        expect(result2).toEqual("Value: 3");
	});
});
