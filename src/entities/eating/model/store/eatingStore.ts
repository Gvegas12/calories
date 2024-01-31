import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { $api } from "@/shared/config/http";
import { storeWithShallow } from "@/shared/lib";

import { Eating } from "../types/eating.types";

interface IEatingStore {
	data: Eating | null;
	initUserData(): void;
}

export const LOCAL_STORAGE_USER_DATA = "LOCAL_STORAGE_USER_DATA";

const store = create(
	devtools(
		immer<IEatingStore>((set) => ({
			data: null,
			async initUserData() {
				const userDataFromLS = JSON.parse(
					localStorage.getItem(LOCAL_STORAGE_USER_DATA) || "false",
				) as Eating;
				if (userDataFromLS) {
					return set({ data: userDataFromLS });
				}

				const { data: userData } = await $api.get<Eating>("/user/10");

				localStorage.setItem(LOCAL_STORAGE_USER_DATA, JSON.stringify(userData));
				set({ data: userData });
			},
		})),
	),
);

const useEatingStore = storeWithShallow<IEatingStore>(store);

export { useEatingStore, store as EatingStore };
