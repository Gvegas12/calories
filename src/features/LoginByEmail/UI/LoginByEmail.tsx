import { FC, useCallback } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormLabel, Typography, Button } from "@mui/material";
import clsx from "clsx";
import { FormProvider, UseFormProps, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
	FetchLoginBody,
	loginByEmailValidationSchema as validationSchema,
	useUserStore,
} from "@/entities/user";
import { protectedRoutePaths } from "@/shared/config/routes";
import UI from "@/shared/UI";

import s from "./LoginByEmail.module.scss";

interface LoginByEmailProps {
	className?: string;
}

const defaultValues: UseFormProps<FetchLoginBody>["defaultValues"] = {
	email: "",
	password: "",
};

export const LoginByEmail: FC<LoginByEmailProps> = ({ className }) => {
	const navigate = useNavigate();
	const { login } = useUserStore();

	const form = useForm<FetchLoginBody>({
		mode: "all",
		defaultValues,
		resolver: zodResolver(validationSchema),
	});
	const {
		control,
		formState: { errors, disabled },
		watch,
	} = form;
	const { email, password } = watch();

	const handleSubmit = useCallback(async () => {
		if (email && password) {
			await login({
				email,
				password,
			});
			navigate(protectedRoutePaths.home);
		}
	}, [email, password, login, navigate]);

	return (
		<FormProvider {...form}>
			<form
				className={clsx(s.LoginByEmail, className)}
				onSubmit={form.handleSubmit(handleSubmit)}
			>
				<FormControl fullWidth>
					<FormLabel className={s.title}>Вход</FormLabel>
					<UI.FieldText
						className={s.field}
						control={control}
						sx={{ marginBottom: 3, borderColor: "white" }}
						InputProps={{
							sx: {
								borderRadius: "1rem",
								color: "white",
							},
						}}
						InputLabelProps={{ sx: { color: "white" } }}
						label="Email"
						variant="outlined"
						name="email"
					/>
					<UI.FieldText
						control={control}
						sx={{
							marginBottom: 2,
							borderColor: "white",
						}}
						InputProps={{
							sx: {
								borderRadius: "1rem",
								color: "white",
							},
						}}
						InputLabelProps={{ sx: { color: "white" } }}
						label="Введите пароль"
						variant="outlined"
						name="password"
					/>
					<Typography
						component="div"
						className={s.errorMessage}
						color="red"
						variant="caption"
					>
						{errors.email?.message || errors.password?.message}
					</Typography>
					<Button
						className={s.btn}
						disabled={disabled}
						color={disabled ? "error" : "primary"}
						variant="contained"
						type="submit"
						size="large"
					>
						Войти
					</Button>
				</FormControl>
			</form>
		</FormProvider>
	);
};
