const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "To Do List",
			template: "./src/index.html",
		}),
	],

	mode: "development",

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},

	devtool: "inline-source-map",
};
