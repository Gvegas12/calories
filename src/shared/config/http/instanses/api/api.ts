import axios from "axios";
import { LOCAL_STORAGE_ACCESS_TOKEN, LOCAL_STORAGE_X_USER_ID } from "..";
// import { publicRoutePaths } from "@/shared/config/routes";

export const $api = axios.create({
	baseURL: __API_URL__,
});

$api.interceptors.request.use((config) => {
	config.headers["x-user-id"] = localStorage.getItem(LOCAL_STORAGE_X_USER_ID);
	config.headers.Authorization = `Bearer ${localStorage.getItem(
		LOCAL_STORAGE_ACCESS_TOKEN,
	)}`;
	return config;
});

// $api.interceptors.response.use(
// 	(config) => config,
// 	(err) => {
// 		if (err.response.status === 401) {
// 			localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN);
// 			window.location.replace(publicRoutePaths.login);
// 		}
// 	},
// );
