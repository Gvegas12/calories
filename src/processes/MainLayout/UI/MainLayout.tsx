import { FC } from "react";

import { Outlet } from "react-router-dom";

import s from "./MainLayout.module.scss";

const MainLayout: FC = () => {
	return (
		<main className={s.MainLayout}>
			<Outlet />
		</main>
	);
};

export default MainLayout;
