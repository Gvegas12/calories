import { FC } from "react";

import clsx from "clsx";
import { Route, Routes, useLocation } from "react-router-dom";

import { LoginByEmail } from "@/features/LoginByEmail";
import { RegistrationByEmail } from "@/features/RegistrationByEmail";
import { publicRoutePaths } from "@/shared/config/routes";

import s from "./AuthWidget.module.scss";

interface AuthWidgetProps {
	className?: string;
}

export const AuthWidget: FC<AuthWidgetProps> = ({ className }) => {
	const location = useLocation();

	return (
		<div className={clsx(s.AuthWidget, className)}>
			<div className={s.wrapper}>
				<Routes location={location}>
					<Route element={<LoginByEmail />} path={publicRoutePaths.login} />
					<Route
						element={<RegistrationByEmail />}
						path={publicRoutePaths.registration}
					/>
				</Routes>
			</div>
		</div>
	);
};
