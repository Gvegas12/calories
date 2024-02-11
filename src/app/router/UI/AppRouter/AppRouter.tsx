import { FC, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { useUserStore } from "@/entities/user";
import { LoginByEmail } from "@/features/LoginByEmail";
import { RegistrationByEmail } from "@/features/RegistrationByEmail";
import AuthPage from "@/pages/AuthPage";
import MainLayout from "@/processes/MainLayout";
import { protectedRoutePaths, publicRoutePaths } from "@/shared/config/routes";

import { protectedRouteConfig } from "../../config";
import { ProtectedRoutesProxy } from "../ProtectedRoutesProxy/ProtectedRoutesProxy";

const AppRouter: FC = () => {
	const { isAuth } = useUserStore();

	return (
		<Routes>
			<Route element={<MainLayout />} path={protectedRoutePaths.home}>
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
					<Route
						index
						path={publicRoutePaths.authLogin}
						element={<LoginByEmail />}
					/>
					<Route
						path={publicRoutePaths.authRegistration}
						element={<RegistrationByEmail />}
					/>
				</Route>
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
