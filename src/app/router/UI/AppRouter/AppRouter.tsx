import { FC, Suspense, useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { useUserStore } from "@/entities/user";
import MainLayout from "@/processes/MainLayout";
import { protectedRoutePaths } from "@/shared/config/routes";

import { protectedRouteConfig, publicRouteConfig } from "../../config";
import { ProtectedRoutesProxy } from "../ProtectedRoutesProxy/ProtectedRoutesProxy";

const AppRouter: FC = () => {
	const { isAuth, checkIsAuth } = useUserStore();

	useEffect(() => {
		checkIsAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Routes>
			<Route element={<MainLayout />} path={protectedRoutePaths.home}>
				{publicRouteConfig.map(({ path, element }, i) => (
					<Route
						key={i}
						path={path}
						element={
							isAuth ? (
								<Navigate to={protectedRoutePaths.home} />
							) : (
								<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
							)
						}
					/>
				))}
				{protectedRouteConfig.map(({ path, element }, i) => (
					<Route
						key={i}
						path={path}
						element={
							<ProtectedRoutesProxy>
								<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
							</ProtectedRoutesProxy>
						}
					/>
				))}
			</Route>
			{/* <Route
				element={<ConfirmDepartamentIDPage />}
				path={`/${LOCAL_STORAGE_DEPARTMENT_ID}`}
			/> */}
			{/* <Route element={<LogoutPage />} path={`/logout`} /> */}
		</Routes>
	);
};

export default AppRouter;
