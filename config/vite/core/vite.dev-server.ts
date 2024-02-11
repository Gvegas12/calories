import { ServerOptions } from "vite";

import type { ViteBuildDevServerOptions } from "./types";

export const viteDevServer = ({
	port,
	paths,
}: ViteBuildDevServerOptions): ServerOptions => {
	const { main } = paths;

	return {
		port,
		proxy: {
			[main.segment]: {
				target: main.target,
				changeOrigin: true,
				secure: false,
				rewrite: main.rewrite,
			},
		},
	};
};
