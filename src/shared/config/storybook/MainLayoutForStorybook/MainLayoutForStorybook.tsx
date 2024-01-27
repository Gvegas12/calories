import { FC, ReactNode } from "react";

interface IMainLayoutForStorybookProps {
	children: ReactNode;
}

const MainLayoutForStorybook: FC<IMainLayoutForStorybookProps> = ({
	children,
}) => {
	return (
		<div className="MainLayout">
			<div className="page-wrapper">{children}</div>
		</div>
	);
};

export default MainLayoutForStorybook;
