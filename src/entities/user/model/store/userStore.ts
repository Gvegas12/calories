import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

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
	login(body: FetchLoginBody): Promise<void>;
	registration(body: FetchRegistrationBody): Promise<void>;
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
			data: null,
			isAuth: false,
			setUserData(props: SetUserDataProp) {
				const { data } = get();
				const newData = { ...data, ...props };
				set({ data: newData, isAuth: true });
				localStorage.setItem(LOCAL_STORAGE_USER_DATA, JSON.stringify(newData));
			},
			async registration(body) {
				try {
					const data = await fetchRegistration(body);
					localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, data.accessToken);
					set({ data, isAuth: !!data });
				} catch (err) {
					/* TODO add ErrorMessage */
					set({ data: null, isAuth: false });
				}
			},
			async login(body) {
				try {
					const data = await fetchLogin(body);
					localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, data.accessToken);
					set({ data, isAuth: !!data });
				} catch (err) {
					/* TODO add ErrorMessage */
					set({ data: null, isAuth: false });
				}
			},
			async checkIsAuth() {
				const at = localStorage.getItem(LOCAL_STORAGE_USER_DATA);
				if (at) {
					const userDataFromLS = getUserDataLS();
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
