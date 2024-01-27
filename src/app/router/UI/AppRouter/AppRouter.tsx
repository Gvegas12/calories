import { FC, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import MainLayout from "@/processes/MainLayout";
import { protectedRoutePaths } from "@/shared/config/routes";

import { protectedRouteConfig, publicRouteConfig } from "../../config";

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route element={<MainLayout />} path={protectedRoutePaths.home}>
				{publicRouteConfig.map(({ path, element }, i) => (
					<Route
						key={i}
						path={path}
						element={
							<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
						}
					/>
				))}
				{protectedRouteConfig.map(({ path, element }, i) => (
					<Route
						key={i}
						path={path}
						element={
							// <ProtectedRoutesProxy>
							<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
							// </ProtectedRoutesProxy>
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
