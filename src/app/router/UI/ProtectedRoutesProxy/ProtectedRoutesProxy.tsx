// import { FC, ReactNode, useEffect } from "react";

// import { Navigate } from "react-router-dom";

// interface IProtectedRoutesProxyProps {
// 	children: ReactNode;
// }

// export const ProtectedRoutesProxy: FC<IProtectedRoutesProxyProps> = ({
// 	children,
// }) => {
// 	const { isAuth, checkIsAuth } = useAuthByPhoneStore((state) => state);

// 	useEffect(() => {
// 		checkIsAuth();
// 	}, [checkIsAuth]);

// 	if (isAuth) {
// 		return <>{children}</>;
// 	}

// 	return <Navigate to={publicRoutePaths.login} replace />;
// };
