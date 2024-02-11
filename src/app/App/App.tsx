import { FC, forwardRef } from "react";

import { createTheme, ThemeProvider, LinkProps } from "@mui/material";
import {
	BrowserRouter,
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from "react-router-dom";

import AppRouter from "../router/UI/AppRouter/AppRouter";

import "@/shared/config/i18n";

const LinkBehavior = forwardRef<
	HTMLAnchorElement,
	Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
	const { href, ...other } = props;
	// Map href (Material UI) -> to (react-router)
	return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
	components: {
		MuiLink: {
			defaultProps: {
				component: LinkBehavior,
			} as LinkProps,
		},
		MuiButtonBase: {
			defaultProps: {
				LinkComponent: LinkBehavior,
			},
		},
	},
});

const App: FC = () => (
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<AppRouter />
		</ThemeProvider>
	</BrowserRouter>
);

export default App;
