import { FC, useEffect } from "react";

import { Stack } from "@mui/material";
import { green } from "@mui/material/colors";

import { СalorieСountingСard } from "@/entities/food";

export const DailyFoodCards: FC = () => {
	useEffect(() => {}, []);

	return (
		<Stack
			display="flex"
			flexWrap="wrap"
			direction="row"
			gap={1.5}
			justifyContent="space-between"
		>
			<СalorieСountingСard name="Завтрак" mock_color={green[50]} />
			<СalorieСountingСard name="Обед" mock_color={green[50]} />
			<СalorieСountingСard name="Ужин" mock_color={green[50]} />
			<СalorieСountingСard name="Перекус" mock_color={green[50]} />
			<СalorieСountingСard name="Кол-во воды" mock_color={green[50]} />
		</Stack>
	);
};
