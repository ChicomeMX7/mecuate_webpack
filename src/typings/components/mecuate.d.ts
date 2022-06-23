import React from "react";

interface VFX {
	name?: string;
	anim?: string;
	color?: string[];
}

interface Props {
	name?: string;
	color?: string | null;
	lol?: any | null;
}

interface LinkProps {
	action?: string | number;
	class?: string;
	content?: string;
	url?: string;
	path?: string;
	sfx?: string;
	vfx?: VFX | string | any;
}

export interface LandingPage extends JSX.Element {
	props?: Props;
}

export as namespace Mecuate;
