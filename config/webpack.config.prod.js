const fs = require("fs");
const path = require("path");
const createHTML = require("./createHTML");
const pagesHTML = createHTML(path.join(__dirname, "../src/pages/"));


module.exports = {
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["ts-loader", "babel-loader"],
			},
			{
				test: /\.(html|htm|pub)$/,
				exclude: [/node_modules/, /config/],
				use: {
					loader: "html-loader",
					options: {
						attrs: ["img:src", "link:href"],
					},
				},
			},
			{
				test: /\.(s[ac]ss|css)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
				exclude: [/node_modules/, /config/],
			},
		],
	},
	externalsType: "script",
	externals: {
		"react-dom": ["/code/cdn/react-dom.js","ReactDOM"],
		react: ["/code/cdn/react.js", "React"],
	},
	devtool: false,
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	entry: {
		index: "./src/components/index/index.tsx",
		home: "./src/components/home/home.tsx",
		contact: "./src/components/contact/contact.tsx",
		user: "./src/components/user/user.tsx",
	},
	output: {
		path: path.join(__dirname, "../../htdocs/"), // compiled
		filename: "code/[name].bundle.js",
		publicPath: path.join(__dirname, "../../htdocs/"), // compiled
	},
	mode: "production",
	plugins: [...pagesHTML],	
};
