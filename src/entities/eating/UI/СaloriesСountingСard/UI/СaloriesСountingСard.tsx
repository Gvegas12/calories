import { FC } from "react";

import AddIcon from "@mui/icons-material/Add";
// import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import { Box, Stack, Typography } from "@mui/material";

import { getRandomInt } from "@/shared/lib";

interface СaloriesСountingСardProps {
	name: string;
}

const colorMap: Record<number, string> = {
	1: "var(--yg-1--40)",
	2: "var(--yg-2--40)",
	3: "var(--yg-3--40)",
	4: "var(--yg-4--40)",
	5: "var(--yg-5--40)",
	6: "var(--yg-6--40)",
	7: "var(--yg-7--40)",
	8: "var(--yg-8--40)",
	9: "var(--yg-9--40)",
};

export const СaloriesСountingСard: FC<СaloriesСountingСardProps> = ({
	name,
}) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			bgcolor={colorMap[getRandomInt(1, 9)]}
			width="max-content"
			minWidth={"40dvw"}
			flexGrow={1}
			p={2}
			borderRadius={4}
		>
			{/* <Box mb={1} display="flex" alignItems="center" columnGap={2}>
				<EggAltOutlinedIcon />
				<Typography color="var(--primary-text-color)" variant="body2">
					123kl
				</Typography>
			</Box> */}
			<Stack direction="row" justifyContent="space-between">
				<Typography
					color="var(--primary-text-color)"
					variant="body1"
					fontSize={18}
					fontWeight={600}
				>
					{name}
				</Typography>
				<AddIcon />
			</Stack>
		</Box>
	);
};
