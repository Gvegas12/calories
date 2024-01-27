import { RouteProps } from "react-router-dom";
import { publicRoutePaths } from "@/shared/config/routes";

import HomePage from "@/pages/HomePage";

export const publicRouteConfig: RouteProps[] = [
	{
		path: publicRoutePaths.login,
		element: <HomePage />,
	},
];
