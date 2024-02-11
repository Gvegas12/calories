import { FC, createRef } from "react";

import clsx from "clsx";
import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { LoginByEmail } from "@/features/LoginByEmail";
import { RegistrationByEmail } from "@/features/RegistrationByEmail";
import { publicRoutePaths } from "@/shared/config/routes";

import s from "./AuthWidget.module.scss";
import "./AuthWidget.animation.scss";

interface AuthWidgetProps {
	className?: string;
}

const routes = [
	{
		path: publicRoutePaths.authLogin,
		name: "LoginByEmail",
		element: <LoginByEmail />,
		nodeRef: createRef(),
	},
	{
		path: publicRoutePaths.authRegistration,
		name: "RegistrationByEmail",
		element: <RegistrationByEmail />,
		nodeRef: createRef(),
	},
];

export const AuthWidget: FC<AuthWidgetProps> = ({ className }) => {
	const location = useLocation();
	const currentOutlet = useOutlet();
	const { nodeRef } =
		routes.find((route) => route.path === location.pathname) ?? {};

	return (
		<div className={clsx(s.AuthWidget, className)}>
			<SwitchTransition>
				<CSSTransition
					key={location.pathname}
					nodeRef={nodeRef as any}
					timeout={300}
					classNames="auth-page"
					unmountOnExit
				>
					{() => (
						<div ref={nodeRef as any} className="auth-page">
							{currentOutlet}
						</div>
					)}
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};
