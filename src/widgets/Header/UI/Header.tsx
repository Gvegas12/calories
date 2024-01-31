import { FC } from "react";

import { Stack, Avatar, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

import { useUserStore } from "@/entities/user";

import { HeaderCalendar } from "./HeaderCalendar/HeaderCalendar";

export const Header: FC = () => {
	const { data } = useUserStore();

	return (
		<Stack direction="row" justifyContent="space-between">
			<Stack direction="row" spacing={1.3} alignItems="center">
				<Avatar sx={{ width: 50, height: 50, bgcolor: green[300] }}>G</Avatar>
				<Stack>
					<Typography variant="body2">Hello,</Typography>
					<Typography fontWeight={600}>
						{data?.firstName || "Anonymus"}
					</Typography>
				</Stack>
			</Stack>
			<HeaderCalendar />
		</Stack>
	);
};
