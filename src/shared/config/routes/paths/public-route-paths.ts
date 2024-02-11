const APP_BASE_URL = import.meta.env.BASE_URL;

export const publicRoutePaths = {
	auth: `${APP_BASE_URL}auth`,
	authLogin: `${APP_BASE_URL}auth/login`,
	authRegistration: `${APP_BASE_URL}auth/registration`,
};
