import { FC } from "react";

import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
	return (
		<main className="MainLayout">
			<div className="page-wrapper">
				<Outlet />
			</div>
		</main>
	);
};

export default MainLayout;
