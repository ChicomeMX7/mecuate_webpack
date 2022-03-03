const fs = require("fs");
const path = require("path");

module.exports = function wr(dir = null, msg) {
	let directr = dir ? dir : path.join(__dirname, `../log/_logger_[${Date.now()}].log`);
	let payload = msg && typeof msg === "string" ? msg : JSON.stringify(msg, true, 2);
	fs.writeFileSync(directr, payload, (e) => {
		if (e) throw e;
	});
}


