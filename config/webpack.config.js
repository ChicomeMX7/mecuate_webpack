const fs = require("fs");
const path = require("path");
const createHtml = require("./create-html");
let htmlPath = path.join(__dirname, "../src/pages/");
const htmlArr = createHtml(htmlPath);
const value = {
	mode: "production",
};

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
	devServer: {
		static: {
			directory: path.join(__dirname, "../../htdocs/"),/* compiled */
			serveIndex: true,
		},
		compress: false,
		port: 9000,
		open: true,
		hot: true,
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
	mode: value.mode ? value.mode : "development",
	plugins: [...htmlArr],	
};
