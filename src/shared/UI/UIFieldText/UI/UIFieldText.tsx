import { FC, Ref, useCallback } from "react";

import { TextField, TextFieldProps } from "@mui/material";
import { Controller, Control } from "react-hook-form";

export type BaseUIFieldTextProps = TextFieldProps & {
	innerRef?: Ref<any>;
};

export const BaseUIFieldText = ({
	innerRef,
	value,
	...props
}: BaseUIFieldTextProps) => (
	<TextField value={value} inputRef={innerRef} variant="outlined" {...props} />
);

export type UIFieldTextProps = BaseUIFieldTextProps & {
	// overrideError?: boolean;
	control: Control<any>;
	name: string;
};

export const UIFieldText: FC<UIFieldTextProps> = ({
	name,
	// overrideError,
	control,
	...props
}) => {
	const transform = {
		input: useCallback(
			(value: any) => {
				if (props.type === "number") {
					return isNaN(value) || value === null || value === 0
						? ""
						: value.toString();
				}

				return value || "";
			},
			[props.type],
		),
		output: useCallback(
			(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				const v = e.target.value;

				if (props.type === "number") {
					const output = parseInt(v, 10);
					return isNaN(output) ? 0 : output;
				}

				return v;
			},
			[props.type],
		),
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { ref, ...field }, fieldState }) => {
				return (
					<BaseUIFieldText
						{...props}
						name={field.name}
						onBlur={field.onBlur}
						onChange={(e) => field.onChange(transform.output(e))}
						value={transform.input(field.value)}
						innerRef={ref}
						error={Boolean(fieldState.error)}
						// helperText={overrideError ? null : fieldState?.error?.message}
					/>
				);
			}}
		/>
	);
};
