import { FC } from "react";

import AddIcon from "@mui/icons-material/Add";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import { Box, Stack, Typography } from "@mui/material";

interface СaloriesСountingСardProps {
	mock_color?: string;
	name: string;
}

export const СaloriesСountingСard: FC<СaloriesСountingСardProps> = ({
	mock_color,
	name,
}) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			bgcolor={mock_color}
			width="max-content"
			minWidth={"40dvw"}
			flexGrow={1}
			p={2}
			borderRadius={4}
		>
			<Box mb={1} display="flex" alignItems="center" columnGap={2}>
				<EggAltOutlinedIcon />
				<Typography variant="body2">123kl</Typography>
			</Box>
			<Stack direction="row" justifyContent="space-between">
				<Typography variant="body1" fontSize={18} fontWeight={600}>
					{name}
				</Typography>
				<AddIcon />
			</Stack>
		</Box>
	);
};
