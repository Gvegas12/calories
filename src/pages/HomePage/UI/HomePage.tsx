import * as React from "react";

import { CaloriesPieChart } from "@/features/CaloriesPieChart/UI/CaloriesPieChart";
import { DailyFoodCards } from "@/features/DailyFoodCards";
import { Header } from "@/widgets/Header/UI/Header";

const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<CaloriesPieChart />
			<DailyFoodCards />
		</>
	);
};

export default HomePage;
