import webpack, { DefinePlugin } from 'webpack';
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MinCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { platform } from 'os';

export function BuildPlugins(options: BuildOptions): Configuration["plugins"] {

	const isDevMode = options.mode === "development";
	const isProdMode = options.mode === "production";

	// common for development and production
	const plugins: Configuration["plugins"] = [
		// In the example above, the html-webpack-plugin generates an HTML file for your application and 
		// automatically injects all your generated bundles into this file.
		new HtmlWebpackPlugin({ template: options.paths.html }),

		// The DefinePlugin replaces variables in your code with other values or expressions at compile time. 
		// This can be useful for allowing different behavior between development builds and production builds.
		new DefinePlugin({
			_PLATFORM: JSON.stringify(options.platform)
		 })
	];

	if(isDevMode) {
		plugins.push(
			new webpack.ProgressPlugin({ dependencies: true, dependenciesCount: 10000 }));

		plugins.push(new MinCssExtractPlugin({
			filename: "css/[name][contenthash].css",
			chunkFilename: "css/[name][contenthash].css",
  		}));
		
	}

	if(isProdMode) {
		plugins.push(new MinCssExtractPlugin({
			filename: "css/[name][contenthash].css",
			chunkFilename: "css/[name][contenthash].css",
  		}));
	}

	if(options.analzer) {
		plugins.push(new BundleAnalyzerPlugin());
	}

	return plugins;
}