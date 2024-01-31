import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { storeWithShallow } from "@/shared/lib";

import type { User } from "../types/user.types";

type SetUserDataProp = Omit<User, "createdAt" | "updatedAt">;

interface IUserStore {
	data: User | null;
	isAuth: boolean;
	checkIsAuth(): Promise<void>;
	setUserData(newData: SetUserDataProp): void;
}

export const LOCAL_STORAGE_USER_DATA = "LOCAL_STORAGE_USER_DATA";

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
			async checkIsAuth() {
				const userDataFromLS = JSON.parse(
					localStorage.getItem(LOCAL_STORAGE_USER_DATA) || "false",
				) as User;

				if (userDataFromLS) return set({ data: userDataFromLS, isAuth: true });
				else set({ isAuth: false, data: null });
			},
		})),
	),
);

const useUserStore = storeWithShallow<IUserStore>(store);

export { useUserStore, store as UserStore };
