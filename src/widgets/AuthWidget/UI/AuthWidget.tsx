import { FC } from "react";

import clsx from "clsx";

import { LoginByEmail } from "@/features/LoginByEmail";

import s from "./AuthWidget.module.scss";

interface AuthWidgetProps {
	className?: string;
}

export const AuthWidget: FC<AuthWidgetProps> = ({ className }) => {
	return (
		<div className={clsx(s.AuthWidget, className)}>
			<div className={s.wrapper}>
				<LoginByEmail />
			</div>
		</div>
	);
};
