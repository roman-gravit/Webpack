export { BuildMode };
export { BuildOptions };
export { BuildPaths };


type BuildMode = "production" | "development";

interface BuildPaths {
	entry: string;
	html: string;
	output: string;
	src: string;
}

interface BuildOptions {
	port: number;
	paths: BuildPaths;
	mode: BuildMode;
	analzer?: boolean;
}