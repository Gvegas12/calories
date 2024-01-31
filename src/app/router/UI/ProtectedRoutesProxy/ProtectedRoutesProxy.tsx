import { FC, ReactNode, useEffect } from "react";

import { Navigate } from "react-router-dom";

import { useUserStore } from "@/entities/user";
import { publicRoutePaths } from "@/shared/config/routes";

interface IProtectedRoutesProxyProps {
	children: ReactNode;
}

export const ProtectedRoutesProxy: FC<IProtectedRoutesProxyProps> = ({
	children,
}) => {
	const { isAuth, checkIsAuth } = useUserStore();

	useEffect(() => {
		checkIsAuth();
	}, [checkIsAuth]);

	if (isAuth) {
		return <>{children}</>;
	}

	return <Navigate to={publicRoutePaths.login} replace />;
};
