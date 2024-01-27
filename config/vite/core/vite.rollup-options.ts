import { BuildOptions } from "vite";

import { ViteOutputPaths } from "./types";

export const viteRollupOptions = ({
	css,
	fonts,
	images,
}: ViteOutputPaths): BuildOptions["rollupOptions"] => ({
	output: {
		assetFileNames: ({ name }) => {
			if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
				return images;
			}

			if (/\.(ttf|otf|fnt|woff?2)$/.test(name ?? "")) {
				return fonts;
			}

			if (/\.css$/.test(name ?? "")) {
				return css;
			}

			return "assets/[name]-[hash][extname]";
		},
	},
});
