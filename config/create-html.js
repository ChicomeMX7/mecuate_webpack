const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const getPath = require("./get-path");
const path = require("path");
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
function addStyles(dir) {
	return `<link rel="stylesheet" href="${dir}" />`;
}

function createHtml(page_path) {
	const htmlPages = getPath(page_path);
	wr(null, htmlPages);
	htmlPages.map((item, i) => {
		let infoJson = {},
			infoData = {};

		try {
			// todo: ch=== WARNING ===or
			infoJson = fs.readFileSync("/pagesInfo.json", "utf-8");
			infoData = JSON.parse(infoJson);
		} catch (err) {
			infoData = { errorInReadingFileFromDirectory: true };
		}
		wr(null, infoData);
		urlPage.push(
			new HtmlWebpackPlugin({
				title: infoData.title ? infoData.title : "=== WARNING ===",
				meta: {
					keywords: infoData.keywords ? infoData.keywords : "=== WARNING ===",
					description: infoData.description ? infoData.description : "=== WARNING ===",
					location: infoData.location ? infoData.location : "=== WARNING ===",
					theme: infoData.theme ? infoData.theme : "#566be2",
				},
				script: `/code/${item}.bundle.js`,
				addExtra: infoData.addExtra ? addScript(infoData.addExtra) : "<!-- pass -->",
				stylet: addStyles("/src/styles/main.css"),
				chunks: [`${item}.js`, `${item}-parsed.js`],
				template: path.join(__dirname, "template.html"),
				filename: item === "index" ? "index.html" : `${item}/index.html`,
				minify: {
					collapseWhitespace: false,
					preserveLineBreaks: true,
				},
			})
		);
	});
	return urlPage;
}

module.exports = createHtml;
