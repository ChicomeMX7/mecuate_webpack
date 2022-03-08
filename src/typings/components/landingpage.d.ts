import React from "react";

// declare namespace Mecuate {}
interface Props {
	name?: string;
	color?: string | null;
	lol?: any | null;
}
export interface LandPage extends JSX.Element {
	props: Props;
}

export as namespace Mecuate;
