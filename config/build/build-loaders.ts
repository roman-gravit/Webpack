import { ModuleOptions } from "webpack";
import MinCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";

export function BuildLoaders(options: BuildOptions): ModuleOptions["rules"] {
	const isDevMode = options.mode === "development";

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			MinCssExtractPlugin.loader, 
			{
				loader: "css-loader",
				options: {
					modules: {
						localIdentName: isDevMode ? "[path][name]_[local]" : "[hash:base64:8]" 
					}
				}
			},
			"sass-loader"
		],
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		scssLoader,
		tsLoader
	]
}