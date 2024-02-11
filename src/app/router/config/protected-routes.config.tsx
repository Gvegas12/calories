import { RouteProps } from "react-router-dom";
import { protectedRoutePaths } from "@/shared/config/routes";

import HomePage from "@/pages/HomePage";

export const protectedRouteConfig: RouteProps[] = [
	{
		index: true,
		path: protectedRoutePaths.home,
		element: <HomePage />,
	},
];
