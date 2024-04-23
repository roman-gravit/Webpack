const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => {
	return {

		mode: env.mode ?? "development",

		entry: path.resolve(__dirname, "src", "index.ts"),

		output: {
			path: path.resolve(__dirname, "build"),
			filename: "[name].[contenthash].js",
			clean: true
		},

		plugins: [
			// In the example above, the html-webpack-plugin generates an HTML file for your application and 
			// automatically injects all your generated bundles into this file.
			new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
			new webpack.ProgressPlugin({ dependencies: true, dependenciesCount: 10000 })
		],

		module: {
			rules: [
			  {
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			  },
			],
		},
		
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		}
	}
};