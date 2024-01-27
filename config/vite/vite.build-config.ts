import { AliasOptions, UserConfigFnObject, loadEnv } from "vite";
import { resolve } from "path";
import { config } from "dotenv";

import {
	vitePlugins,
	viteDevServer,
	viteDefineOptions,
	viteRollupOptions,
	ViteOutputPaths,
	ViteBuildDevServerOptions,
} from "./core";

export const viteBuildConfig =
	(): UserConfigFnObject =>
	({ mode }) => {
		// Найстройка env переменных
		const readableEnvFile = process.env.ENV_FILE;
		config({ path: resolve(__dirname, "env", `.env.${readableEnvFile}`) });
		process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

		const API_URL = process.env.VITE_API_URL;
		const API_URL_AUTH = process.env.VITE_API_URL_AUTH;

		if (!API_URL || !API_URL_AUTH)
			throw new Error("API_URL или API_URL_AUTH не определены!");

		const apiPaths: ViteBuildDevServerOptions["paths"] = {
			main: {
				segment: "/webapi/api/v1",
				target: API_URL,
				rewrite: (path) => path.replace(/\/webapi\/api\/v1/, ""),
			},
			auth: {
				segment: "/api/v2/auth",
				target: API_URL_AUTH,
				rewrite: (path) => path.replace(/\/api\/v2\/auth/, ""),
			},
		};

		const isDev = mode === "development";
		const port: number = 5173;
		const alias: AliasOptions = {
			"@": resolve("src"),
		};
		const outputPaths: ViteOutputPaths = {
			css: "assets/css/[name]-[hash][extname]",
			fonts: "assets/fonts/[name]-[hash][extname]",
			images: "assets/images/[name]-[hash][extname]",
		};
		const outputDir = resolve("build");

		return {
			base: process.env.VITE_APP_BASE_URL || "/",
			build: {
				outDir: outputDir,
				rollupOptions: viteRollupOptions(outputPaths),
			},

			resolve: {
				alias: alias,
			},

			server: isDev
				? viteDevServer({
						port,
						paths: apiPaths,
				  })
				: undefined,

			define: viteDefineOptions({
				isDev,
				port,
				paths: apiPaths,
			}),

			test: {
				globals: true,
				environment: "jsdom",
			},

			plugins: vitePlugins(outputDir),
		};
	};
