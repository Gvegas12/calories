import { NavigateFunction } from "react-router-dom";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { protectedRoutePaths } from "@/shared/config/routes";
import { storeWithShallow } from "@/shared/lib";

import {
	FetchLoginBody,
	FetchRegistrationBody,
	fetchLogin,
	fetchRegistration,
} from "../http";
import type { User } from "../types/user.types";

type SetUserDataProp = Omit<User, "createdAt" | "updatedAt">;

interface IUserStore {
	data: User | null;
	isAuth: boolean;
	checkIsAuth(): Promise<void>;
	login(body: FetchLoginBody, navigate: NavigateFunction): Promise<void>;
	registration(
		body: FetchRegistrationBody,
		navigate: NavigateFunction,
	): Promise<void>;
}

const LOCAL_STORAGE_USER_DATA = __IS_DEV__
	? "CALORIES_LOCAL_STORAGE_USER_DATA"
	: "ud";
const LOCAL_STORAGE_ACCESS_TOKEN = __IS_DEV__
	? "CALORIES_LOCAL_STORAGE_ACCESS_TOKEN"
	: "at";

const getUserDataLS = () =>
	JSON.parse(
		localStorage.getItem(LOCAL_STORAGE_USER_DATA) || "null",
	) as IUserStore["data"];

const store = create(
	devtools(
		immer<IUserStore>((set, get) => ({
			data: getUserDataLS(),
			isAuth: false,
			setUserData(props: SetUserDataProp) {
				const { data } = get();
				const newData = { ...data, ...props };
				set({ data: newData, isAuth: true });
				localStorage.setItem(LOCAL_STORAGE_USER_DATA, JSON.stringify(newData));
			},
			async registration(body, navigate) {
				try {
					const { access_token, ...userData } = await fetchRegistration(body);

					if (access_token) {
						localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, access_token);
						localStorage.setItem(
							LOCAL_STORAGE_USER_DATA,
							JSON.stringify(userData),
						);

						set({ data: userData, isAuth: !!access_token });
						navigate(protectedRoutePaths.home);
					}
				} catch (err) {
					/* TODO add ErrorMessage */
					set({ data: null, isAuth: false });
				}
			},
			async login(body, navigate) {
				try {
					const { access_token, ...userData } = await fetchLogin(body);

					if (access_token) {
						localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, access_token);
						localStorage.setItem(
							LOCAL_STORAGE_USER_DATA,
							JSON.stringify(userData),
						);

						set({ data: userData, isAuth: !!access_token });
						navigate(protectedRoutePaths.home);
					}
				} catch (err) {
					/* TODO add ErrorMessage */
					set({ data: null, isAuth: false });
				}
			},
			async checkIsAuth() {
				const at = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
				if (at) {
					const userDataFromLS = getUserDataLS();
					console.log({ userDataFromLS, isAuth: !!userDataFromLS });
					set({ data: userDataFromLS, isAuth: !!userDataFromLS });
				} else {
					localStorage.clear();
					set({ data: null, isAuth: false });
				}
			},
		})),
	),
);

const useUserStore = storeWithShallow<IUserStore>(store);

export { useUserStore, store as UserStore };
