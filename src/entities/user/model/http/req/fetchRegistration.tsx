import { z } from "zod";

import { User } from "@/entities/user";
import { $api, apiPaths } from "@/shared/config/http";

export const registrationByEmailValidationSchema = z.object({
	email: z.string().email(),
	firstName: z.string(),
	password: z.string(),
});

export type FetchRegistrationBody = z.infer<
	typeof registrationByEmailValidationSchema
>;

export interface FetchRegistrationResponse extends User {
	accessToken: string;
}

export const fetchRegistration = async (
	body: FetchRegistrationBody,
): Promise<FetchRegistrationResponse> => {
	const response = await $api.post<FetchRegistrationResponse>(
		apiPaths.login,
		body,
	);

	return response.data;
};
