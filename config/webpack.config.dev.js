const path = require("path");
const entryPoints = require("./getEntry");
const createHTML = require("./createHTML");
const pagesHTML = createHTML(path.join(__dirname, "../src/pages/"));



module.exports = {
	entry: entryPoints,
	output: {
		path: path.join(__dirname, "../../htdocs"),
		filename: "code/[name].bundle.js",
	},
	mode: "development",
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [...pagesHTML],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: [/node_modules/, /config/],
				use: ["ts-loader", "babel-loader"],
			},
			{
				test: /\.(html|htm|pub)$/,
				exclude: [/node_modules/, /config/],
				use: ["html-loader", "file-loader"],
			},
			{
				test: /\.(s[ac]ss|css)$/,
				exclude: [/node_modules/, /config/],
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	externalsType: "script",
	externals: {
		"react-dom": ["/code/cdn/react-dom.js", "ReactDOM"],
		react: ["/code/cdn/react.js", "React"],
	},
	devServer: {
		static: path.join(__dirname, "../../htdocs"),
		compress: false,
		port: 9898,
		open: true,
		hot: true,
	},
	devtool: "eval",
};
