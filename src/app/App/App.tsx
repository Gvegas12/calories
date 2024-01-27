import { FC } from "react";

import { BrowserRouter } from "react-router-dom";

import AppRouter from "../router/UI/AppRouter/AppRouter";

import "@/shared/config/i18n";

const App: FC = () => (
	<BrowserRouter>
		<AppRouter />
	</BrowserRouter>
);

export default App;
