import { ProxyOptions } from "vite";
import { ViteDefineBuildOptions, ViteBuildDevServerPaths } from "./types";

const getUrl = (
	isDev: boolean,
	port: number,
	segment: ViteBuildDevServerPaths["segment"],
	target: ProxyOptions["target"],
) =>
	isDev
		? JSON.stringify(`http://localhost:${port}${segment}`)
		: JSON.stringify(target);

export const viteDefineOptions = ({
	paths,
	port,
	isDev,
	storybookVariables,
}: ViteDefineBuildOptions) => {
	const API_PATHS = {
		__AUTH_API_URL__: paths?.auth
			? getUrl(isDev, port, paths.auth.segment, paths.auth.target)
			: JSON.stringify(""),
		__API_URL__: paths?.main
			? getUrl(isDev, port, paths.main.segment, paths.main.target)
			: JSON.stringify(""),
	};

	return {
		__IS_DEV__: isDev,
		...API_PATHS,
		__STORYBOOK_IS_DEV__: storybookVariables
			? storybookVariables.__STORYBOOK_IS_DEV__
			: false,
		__STORYBOOK_IS_PROD__: storybookVariables
			? storybookVariables.__STORYBOOK_IS_PROD__
			: false,
		__IS_STORYBOOK__: storybookVariables
			? storybookVariables.__IS_STORYBOOK__
			: false,
	};
};
