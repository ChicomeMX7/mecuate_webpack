const fs = require("fs");
const path = require("path");
const getPath = require("./getPath");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const st_ = require('../src/styles/themes.json');



const urlPage = [];
const wr = require("./logger");

function addScript(obj) {
	const type = {
		nada: "",
		defer: "defer",
		module: 'type="module"',
	}[obj.type ? obj.type : "nada"];
	return `<script src="${obj.link}" ${type}></script>`;
}

function getTheme(keyStr) {
	let key = keyStr.split('.');
	wr(null,key);
	return st_.colors[st_.theme[key[1]][key[2]]];
}

function addStyles(dir) {
	return `<link rel="stylesheet" href="${dir}" />`;
}

function createHtml(page_path) {
	const htmlPages = getPath(page_path);

	let infoJson = {};
	infoJson = fs.readFileSync(path.join(__dirname, "../src/pages/pagesInfo.json"), "utf-8");
	let parsedJson = JSON.parse(infoJson);

	htmlPages.map((item, i) => {
		let infoData = parsedJson[item] ? parsedJson[item] : {};

		urlPage.push(
			new HtmlWebpackPlugin({
				title: infoData.title ? infoData.title : "=== WARNING ===",
				meta: {
					keywords: infoData.keywords ? infoData.keywords : "=== WARNING ===",
					description: infoData.description ? infoData.description : "=== WARNING ===",
					location: infoData.location ? infoData.location : "=== WARNING ===",
					"theme-color": infoData.theme ? getTheme(infoData.theme) : "#50d64c",
				},
				script: `/code/${item}.bundle.js`,
				addExtra: infoData.addExtra ? addScript(infoData.addExtra) : "<!-- pass -->",
				stylet: addStyles("/src/styles/main.css"),
				// chunks: [`${item}.js`, `${item}-parsed.js`],
				inject: true,
				template: path.join(__dirname, "template.html"),
				filename: item === "index" ? "index.html" : `${item}/index.html`,
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeStyleLinkTypeAttributes: true,
					keepClosingSlash: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: true,
				},
			})
		);
	});
	return urlPage;
}

module.exports = createHtml;
