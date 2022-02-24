///<reference  path="../../../src/typings/main.d.ts"/>
class game {
	pn = "any_string";
	_g: _example.inFn;
	constructor(_n: string) {
		this.pn = this.pn + _n;
		this._g = {
			name: "_g" + this.pn,
			init: (a = null, b = null, c = null, d = null) => {
				return `${a} ${b} ${c} ${d}`;
			},
		};
	}
}

const _g_: _example.game = new game("jim");
