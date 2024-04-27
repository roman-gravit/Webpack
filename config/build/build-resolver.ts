import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function BuildResolver(_options: BuildOptions): Configuration["resolve"] {
	return {
		extensions: ['.tsx', '.ts', '.js']
	}
}