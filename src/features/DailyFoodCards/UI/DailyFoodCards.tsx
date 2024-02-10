import { FC, useEffect } from "react";

import { Stack } from "@mui/material";
import { green } from "@mui/material/colors";

import { СaloriesСountingСard } from "@/entities/eating";
import { useUserStore } from "@/entities/user";

export const DailyFoodCards: FC = () => {
	const { data } = useUserStore();

	useEffect(() => {}, []);

	return (
		<Stack
			display="flex"
			flexWrap="wrap"
			direction="row"
			gap={1.5}
			justifyContent="space-between"
		>
			{data &&
				data?.eatings?.length &&
				data.eatings.map(({ name, id }) => (
					<СaloriesСountingСard key={id} name={name} mock_color={green[50]} />
				))}
		</Stack>
	);
};
