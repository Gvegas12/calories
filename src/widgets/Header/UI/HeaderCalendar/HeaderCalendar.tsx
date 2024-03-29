import { FC, useState } from "react";

import { Box, Button, Paper } from "@mui/material";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import { CalendarButton } from "./CalendarButton/CalendarButton";

export const HeaderCalendar: FC = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<Box position="relative">
			<Button color="inherit" size="small" onClick={() => setToggle(!toggle)}>
				<CalendarButton />
			</Button>
			{toggle && (
				<Paper
					sx={{
						position: "absolute",
						zIndex: 1,
						right: "1rem",
						top: "2.5rem",
					}}
					variant="outlined"
				>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateCalendar defaultValue={dayjs("2022-04-17")} />
					</LocalizationProvider>
				</Paper>
			)}
		</Box>
	);
};
