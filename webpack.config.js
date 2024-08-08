import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const supportedLocales = ["en-US", "de", "pl", "it"];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
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
		new webpack.ContextReplacementPlugin(
			/^date-fns[/\\]locale$/,
			new RegExp(`\\.[/\\\\](${supportedLocales.join("|")})[/\\\\]index\\.js$`)
		),
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
