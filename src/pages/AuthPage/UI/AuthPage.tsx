import { FC, useState } from "react";

import {
	Button,
	FormControl,
	FormLabel,
	TextField,
	Typography,
} from "@mui/material";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { useUserStore } from "@/entities/user";
import { protectedRoutePaths } from "@/shared/config/routes";

import { registration } from "../model";

const AuthPage: FC = () => {
	const navigate = useNavigate();
	const { setUserData } = useUserStore();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const onSubmitHanlder = async () => {
		try {
			if (name && email) {
				const newUser = await registration({ email, firstName: name });
				setUserData(newUser);
				navigate(protectedRoutePaths.home);
			}
		} catch (error) {
			console.log("123123212", { error });

			if (error instanceof AxiosError)
				setErrorMessage(error?.response?.data.message);
		}
	};

	return (
		<form style={{ display: "flex", alignItems: "center", height: "100dvh" }}>
			<FormControl fullWidth>
				<FormLabel
					sx={{ textAlign: "center", marginBottom: 2, fontSize: "1.1rem" }}
				>
					Давайте познакомимся :D
				</FormLabel>
				<TextField
					value={name}
					onChange={(e) => {
						setErrorMessage("");
						setName(e.target.value);
					}}
					sx={{ marginBottom: 2 }}
					label="Введите ваше имя :?"
					variant="outlined"
					name="firstName"
				/>
				<TextField
					value={email}
					onChange={(e) => {
						setErrorMessage("");
						setEmail(e.target.value);
					}}
					sx={{ marginBottom: 2 }}
					label="Введите ваш email :?"
					variant="outlined"
					name="email"
				/>
				<Typography color="red" align="center" variant="caption">
					{errorMessage}
				</Typography>
				<Button
					color={errorMessage ? "error" : "primary"}
					onClick={onSubmitHanlder}
				>
					Познакомиться!
				</Button>
			</FormControl>
		</form>
	);
};

export default AuthPage;
