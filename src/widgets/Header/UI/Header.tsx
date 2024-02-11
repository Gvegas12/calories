import { FC } from "react";

import { Stack, Avatar, Typography } from "@mui/material";

import { useUserStore } from "@/entities/user";

import { HeaderCalendar } from "./HeaderCalendar/HeaderCalendar";

export const Header: FC = () => {
	const { data } = useUserStore();

	const name = data?.firstName || "Anonymus";

	return (
		<Stack direction="row" justifyContent="space-between">
			<Stack direction="row" spacing={2} alignItems="center">
				<Avatar sx={{ width: 50, height: 50, bgcolor: "black" }}>
					{name[0]}
				</Avatar>
				<Stack>
					<Typography color="var(--primary-text-color)" variant="body2">
						Привет,
					</Typography>
					<Typography color="var(--primary-text-color)" fontWeight={600}>
						{name}
					</Typography>
				</Stack>
			</Stack>
			<HeaderCalendar />
		</Stack>
	);
};
