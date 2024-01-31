import { User } from "@/entities/user";
import { $api } from "@/shared/config/http";

export const registration = async (
	data: Pick<User, "email" | "firstName">,
): Promise<User> => {
	const res = await $api.post("auth/registration", data);

	return res.data;
};
