const process = require("process");
const fs = require("fs");
const child_process = require("child_process");
const logdir = "C:/xampp/htdocs/log";
const path = require("path");

const fecha = new Date();

const orders = org_params();

const __html_file__ = ({lang, meta, title, analytics, styles, target, code, assets}) => {
	return `<!doctype html><html lang="${lang}"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"> ${meta} <title>${title}</title> ${analytics} </head><body> ${styles} ${target} ${code} ${assets} </body></html>`;
} 
	
const __html__ = ()=>{ 
	return { 
		lang:'Target:::(LANG)', 
		meta:'Target:::(META)',
		title:'Target:::(TITLE)',
		analytics:'Target:::(ANALYTICS)',
		styles:'Target:::(STYLES)',
		target:'Target:::(TARGET)',
		code:'Target:::(CODE)',
		assets:'Target:::(ASSETS)',
	};
};

function org_params() {
	return process.argv.slice(2, process.argv.length);
}
function outs(str,pathFile) {
	let data2save = `///pepe --output ${ fecha.toDateString() } \n\n ${str}`;
	let outsize = data2save.length * 8;
	fs.writeFile( `${pathFile}/${Date.now()}.js` , data2save, (err) => {
		if (err) throw err;
		console.log(`Data log saved :[${outsize}]Kib --${fecha.toDateString()}`);
	});
}
function logg(msg) {
	let data2save = JSON.stringify(msg, true, 2);
	let outsize = data2save.length * 8;
	fs.writeFile(`${logdir}/logg${fecha.toDateString().replace(".", "")}-${Date.now()}-file.log`, data2save, (err) => {
		if (err) throw err;
		console.log(`Data log saved :[${outsize}]Kib --${fecha.toDateString()}`);
	});
}
function compile(file) {
	let options = {
		cwd: file.cwd || null, // <string> | <URL> Current working directory of the child process.
		input: file.input || null, // <string> | <Buffer> | <TypedArray> | <DataView> The value which will be passed as stdin to the spawned process. Supplying this value will override stdio[0].
		stdio: file.stdio || null, // <string> | <Array> Child's stdio configuration. stderr by default will be output to the parent process' stderr unless stdio is specified. Default: 'pipe'.
		env: file.env || null, // <Object> Environment key-value pairs. Default: process.env.
		shell: file.shell || null, // <string> Shell to execute the command with. See Shell requirements and Default Windows shell. Default: '/bin/sh' on Unix, process.env.ComSpec on Windows.
		uid: file.uid || null, // <number> Sets the user identity of the process. (See setuid(2)).
		gid: file.gid || null, // <number> Sets the group identity of the process. (See setgid(2)).
		timeout: file.timeout || null, // <number> In milliseconds the maximum amount of time the process is allowed to run. Default: undefined.
		killSignal: file.killSignal || null, // <string> | <integer> The signal value to be used when the spawned process will be killed. Default: 'SIGTERM'.
		maxBuffer: file.maxBuffer || null, // <number> Largest amount of data in bytes allowed on stdout or stderr. If exceeded, the child process is terminated and any output is truncated. See caveat at maxBuffer and Unicode. Default: 1024 * 1024.
		encoding: file.encoding || null, // <string> The encoding used for all stdio inputs and outputs. Default: 'buffer'.
		windowsHide: file.windowsHide || null, // <boolean> Hide the subprocess console window that would normally be created on Windows systems. Default: false.
	};

	const folderName = file.out || `default_output-${fecha.toDateString().replace(".", "")}`;
	console.log(`-- -- -- ${folderName}`);

	try {

		fs.mkdirSync(folderName, { recursive: true });

	} catch (err) {
		console.error(err);
	}

	let src_dir = file.src || __dirname;
	let out_dir = folderName;

	// let command = `npx babel ${src_dir} --out-dir ${out_dir} --presets @babel/preset-typescript --ignore "src/**/*.spec.js","src/**/*.test.js"`;
	let command = `npx babel --presets @babel/preset-typescript ${src_dir}`;
	console.log("CMD is :: " + command);

	let result = child_process.execSync(command, options);
	outs(result,out_dir);
	return result;
}

for (let _i = 0; _i < orders.length; _i++) {
	console.log("PARAM IS", orders[_i]);
}

let task = {
	// src: path.join(__dirname, "../src/components"),
	src: "src/components/hello.tsx",
	out: path.join(__dirname, "../../htdocs/src/components"),
	encoding: "utf8",
};


let t = compile(task);

console.log(t);
