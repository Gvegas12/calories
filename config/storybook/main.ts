import { resolve } from "path";
import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";
import { viteDefineOptions, viteDefineOptions } from "../vite/core/vite.define";

const config: StorybookConfig = {
	stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		// "@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	staticDirs: ["../../public"],
	docs: {
		autodocs: "tag",
	},
	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
	async viteFinal(config, { configType }) {
		const isDev = configType === "DEVELOPMENT";

		return mergeConfig(config, {
			resolve: {
				alias: {
					"@": resolve(__dirname, "..", "..", "src"),
				},
			},
			plugins: [
				viteStaticCopy({
					targets: [
						{
							src: "public/locales",
							dest: "locales/",
						},
					],
				}),
			],
			define: viteDefineOptions({
				storybookVariables: {
					__STORYBOOK_IS_DEV__: isDev,
					__STORYBOOK_IS_PROD__: configType === "PRODUCTION",
					__IS_STORYBOOK__: isDev || configType === "PRODUCTION",
				},
				isDev,
			}),
		});
	},
};

export default config;
