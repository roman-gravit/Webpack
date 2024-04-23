import path  from "path";
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

// If you use TypeScript in the webpack config, you'll need to properly type devServer property 
// in order to avoid TS errors (e.g. 'devServer' does not exist in type 'Configuration'). 
// For that use either:
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type MODE = "production" | "development";

interface EnvVariables {
	mode: MODE,
	port: number
}

export default (env: EnvVariables) => {

	const isDevMode = env.mode === "development";

	const config: webpack.Configuration = {

		//  Enable production optimizations or development hints.
		mode: env.mode ?? "development",

		//  The entry point(s) of the compilation.
		entry: path.resolve(__dirname, "src", "index.ts"),

		// Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
		output: {
			path: path.resolve(__dirname, "build"),
			filename: "[name].[contenthash].js",
			clean: true
		},

		// Add additional plugins to the compiler.
		plugins: [
			// In the example above, the html-webpack-plugin generates an HTML file for your application and 
			// automatically injects all your generated bundles into this file.
			new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
			isDevMode
				? new webpack.ProgressPlugin({ dependencies: true, dependenciesCount: 10000 })
				: undefined
		],

		// Options affecting the normal modules (`NormalModuleFactory`).
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
		},

		// developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
		devtool: isDevMode 
					? "inline-source-map" 
					: false,

		// Can be used to configure the behaviour of webpack-dev-server when
		// the webpack config is passed to webpack-dev-server CLI.
		devServer: isDevMode 
					? { port: env.port ?? 3000, open: true }
					: undefined 
	}

	return config;
};