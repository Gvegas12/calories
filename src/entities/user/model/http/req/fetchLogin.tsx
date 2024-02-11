import z from "zod";

import { User } from "@/entities/user";
import { $api, apiPaths } from "@/shared/config/http";

export const loginByEmailValidationSchema = z.object({
	email: z.string().email(),
	// password: z.string(),
});

export type FetchLoginBody = z.infer<typeof loginByEmailValidationSchema>;

export interface FetchLoginResponse extends User {
	access_token: string;
}

export const fetchLogin = async (
	body: FetchLoginBody,
): Promise<FetchLoginResponse> => {
	const response = await $api.post<FetchLoginResponse>(apiPaths.login, body);

	return response.data;
};
