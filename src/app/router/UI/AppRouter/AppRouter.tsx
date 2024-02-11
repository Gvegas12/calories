import { FC, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { useUserStore } from "@/entities/user";
import AuthPage from "@/pages/AuthPage";
import MainLayout from "@/processes/MainLayout";
import { protectedRoutePaths, publicRoutePaths } from "@/shared/config/routes";

import { protectedRouteConfig, publicRouteConfig } from "../../config";
import { ProtectedRoutesProxy } from "../ProtectedRoutesProxy/ProtectedRoutesProxy";

const AppRouter: FC = () => {
	const { isAuth } = useUserStore();

	return (
		<Routes>
			<Route
				path={publicRoutePaths.auth}
				element={
					isAuth ? (
						<Navigate to={protectedRoutePaths.home} />
					) : (
						<Suspense fallback={<div>Loading...</div>}>
							<AuthPage />
						</Suspense>
					)
				}
			>
				{publicRouteConfig.map(({ path, element, index }, i) => (
					<Route key={i} index={index} path={path} element={element} />
				))}
			</Route>
			<Route element={<MainLayout />} path={protectedRoutePaths.home}>
				{protectedRouteConfig.map(({ path, element, index }, i) => (
					<Route
						key={i}
						index={index}
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
