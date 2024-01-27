import { UserConfig } from "vite";
import { ViteBuildDevServerOptions } from "./dev-server.types";

export type StorybookDefineVariables = {
	__STORYBOOK_IS_DEV__: boolean;
	__STORYBOOK_IS_PROD__: boolean;
	__IS_STORYBOOK__: boolean;
};

export interface ViteDefineBuildOptions
	extends Partial<Pick<ViteBuildDevServerOptions, "paths">> {
	isDev: boolean;
	port?: number;
	storybookVariables?: StorybookDefineVariables;
}
