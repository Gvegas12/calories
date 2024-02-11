import { RouteProps } from "react-router-dom";
import { publicRoutePaths } from "@/shared/config/routes";

import { LoginByEmail } from "@/features/LoginByEmail";
import { RegistrationByEmail } from "@/features/RegistrationByEmail";

export const publicRouteConfig: RouteProps[] = [
	{
		index: true,
		path: publicRoutePaths.authLogin,
		element: <LoginByEmail />,
	},
	{
		path: publicRoutePaths.authRegistration,
		element: <RegistrationByEmail />,
	},
];
