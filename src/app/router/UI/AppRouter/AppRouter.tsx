import { FC, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { useUserStore } from "@/entities/user";
import MainLayout from "@/processes/MainLayout";
import { protectedRoutePaths } from "@/shared/config/routes";

import { protectedRouteConfig, publicRouteConfig } from "../../config";
import { ProtectedRoutesProxy } from "../ProtectedRoutesProxy/ProtectedRoutesProxy";

const AppRouter: FC = () => {
	const { isAuth } = useUserStore();

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
		</Routes>
	);
};

export default AppRouter;
