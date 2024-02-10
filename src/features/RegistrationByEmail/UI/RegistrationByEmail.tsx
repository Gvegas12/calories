import { FC } from "react";

import clsx from "clsx";

import s from "./RegistrationByEmail.module.scss";

interface RegistrationByEmailProps {
	className?: string;
}

export const RegistrationByEmail: FC<RegistrationByEmailProps> = ({
	className,
}) => {
	return (
		<div className={clsx(s.RegistrationByEmail, className)}>
			RegistrationByEmail
		</div>
	);
};
