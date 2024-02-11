import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { VitePWA } from "vite-plugin-pwa";

export const vitePlugins = (outputDir: string) => {
	const plugins = [
		react(),
		svgr({ exportAsDefault: true }),
		viteStaticCopy({
			targets: [
				{
					src: "deploy/nginx",
					dest: "config",
				},
			],
		}),
		VitePWA({
			registerType: "autoUpdate",
			outDir: outputDir,
			manifestFilename: "manifest.json",
			manifest: {
				short_name: "Calories",
				name: "Calories",
				description: "Calories",
				start_url: ".",
				theme_color: "#000000",
				background_color: "#ffffff",
				display: "fullscreen",
				icons: [
					{
						src: "assets/images/logo16.png",
						sizes: "16x16",
						type: "image/png",
					},
					{
						src: "assets/images/logo32.png",
						sizes: "32x32",
						type: "image/png",
					},
					{
						src: "assets/images/logo192.png",
						type: "image/png",
						sizes: "192x192",
					},
					{
						src: "assets/images/logo512.png",
						type: "image/png",
						sizes: "512x512",
					},
				],
			},
		}),
	];

	return plugins;
};
