import { ServerOptions } from "vite";

import type { ViteBuildDevServerOptions } from "./types";

export const viteDevServer = ({
	port,
	paths,
}: ViteBuildDevServerOptions): ServerOptions => {
	const { auth, main } = paths;

	return {
		port,
		proxy: {
			[auth.segment]: {
				target: auth.target,
				changeOrigin: true,
				rewrite: auth.rewrite,
			},
			[main.segment]: {
				target: main.target,
				changeOrigin: true,
				secure: false,
				rewrite: main.rewrite,
			},
		},
	};
};
