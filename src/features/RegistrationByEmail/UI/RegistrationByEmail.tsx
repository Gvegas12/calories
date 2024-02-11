import { FC, useCallback } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormLabel, Typography, Button } from "@mui/material";
import clsx from "clsx";
import { useForm, FormProvider, UseFormProps } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
	useUserStore,
	FetchRegistrationBody,
	registrationByEmailValidationSchema as validationSchema,
} from "@/entities/user";
import { publicRoutePaths } from "@/shared/config/routes";
import UI from "@/shared/UI";

import s from "./RegistrationByEmail.module.scss";

interface RegistrationByEmailProps {
	className?: string;
}

const defaultValues: UseFormProps<FetchRegistrationBody>["defaultValues"] = {
	email: "",
	firstName: "",
};

export const RegistrationByEmail: FC<RegistrationByEmailProps> = ({
	className,
}) => {
	const navigate = useNavigate();
	const { registration } = useUserStore();

	const form = useForm<FetchRegistrationBody>({
		mode: "all",
		defaultValues,
		resolver: zodResolver(validationSchema),
	});
	const {
		control,
		formState: { errors, disabled },
		watch,
	} = form;
	const { email, firstName } = watch();

	const handleSubmit = useCallback(async () => {
		if (email && firstName) {
			await registration(
				{
					email,
					firstName,
				},
				navigate,
			);
		}
	}, [email, firstName, registration, navigate]);

	return (
		<FormProvider {...form}>
			<form
				className={clsx(s.RegistrationByEmail, className)}
				onSubmit={form.handleSubmit(handleSubmit)}
			>
				<FormControl fullWidth>
					<FormLabel className={s.title}>Регистрация</FormLabel>
					<UI.FieldText
						className={s.field}
						control={control}
						sx={{ marginBottom: 2, borderColor: "white" }}
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
							borderColor: "white",
						}}
						InputProps={{
							sx: {
								borderRadius: "1rem",
								color: "white",
							},
						}}
						InputLabelProps={{ sx: { color: "white" } }}
						label="Ваше имя"
						variant="outlined"
						name="firstName"
					/>
					<Typography
						component="div"
						className={s.errorMessage}
						color="red"
						variant="caption"
					>
						{errors.email?.message}
					</Typography>
					<Button
						className={s.btn}
						disabled={disabled}
						color={disabled ? "error" : "primary"}
						variant="contained"
						type="submit"
						size="large"
					>
						Регистрация
					</Button>
					<Button
						href={publicRoutePaths.authRegistration}
						className={clsx(s.btn, s.btnSub)}
						disabled={disabled}
						color={disabled ? "error" : "primary"}
						variant="contained"
						size="large"
					>
						Войти
					</Button>
				</FormControl>
			</form>
		</FormProvider>
	);
};
