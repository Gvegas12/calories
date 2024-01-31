import { RouteProps } from "react-router-dom";
import { publicRoutePaths } from "@/shared/config/routes";

import AuthPage from "@/pages/AuthPage";

export const publicRouteConfig: RouteProps[] = [
	{
		path: publicRoutePaths.login,
		element: <AuthPage />,
	},
];
