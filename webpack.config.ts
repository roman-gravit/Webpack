import path  from "path";
import webpack from 'webpack';
import { BuildWebpack } from "./config/build/build-webpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";

export interface EnvVariables {
	mode: BuildMode,
	port: number,
	analyzer?: boolean;
}

export default (env: EnvVariables) => {

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		output: path.resolve(__dirname, "out"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src")
	}

	const config: webpack.Configuration = BuildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? "development",
		paths: paths,
		analzer: env.analyzer

	})


	return config;
};