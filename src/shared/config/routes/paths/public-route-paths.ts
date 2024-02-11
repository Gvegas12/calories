const APP_BASE_URL = import.meta.env.BASE_URL;

export const publicRoutePaths = {
	auth: `${APP_BASE_URL}auth/*`,
	authLogin: `${APP_BASE_URL}auth/login`,
	login: `${APP_BASE_URL}login`,
	registration: `${APP_BASE_URL}registration`,
	authRegistration: `${APP_BASE_URL}auth/registration`,
};
