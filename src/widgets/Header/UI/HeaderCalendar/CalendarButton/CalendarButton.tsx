import { FC } from "react";

import { Stack, Typography } from "@mui/material";

interface CalendarButtonProps {}

export const CalendarButton: FC<CalendarButtonProps> = () => {
	return (
		<Stack
			bgcolor="#000"
			p={0.7}
			borderRadius={2}
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Typography fontSize={14} color="var(--secondary-text-color)">
				08
			</Typography>
			<Typography fontSize={14} color="var(--secondary-text-color)">
				Нояб
			</Typography>
		</Stack>
	);
};
