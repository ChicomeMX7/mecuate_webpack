/*
        game engine types 
*/

declare namespace _example {
	interface inFn {
		name: string;
		init(a: string | number | null, b: string | number | null, c: string | number | null, d: string | number | null): string;
	}
	interface game {
		pn: string;
		_g: _example.inFn;
	}
}
