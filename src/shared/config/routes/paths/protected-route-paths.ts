const APP_BASE_URL = import.meta.env.BASE_URL;

export const protectedRoutePaths = {
	home: `${APP_BASE_URL}`,
	snap_passport: `${APP_BASE_URL}snap_passport`,
	snap_user_face: `${APP_BASE_URL}snap_user_face`,
	questionnaire: `${APP_BASE_URL}questionnaire`,
	enter_questionnaire: `${APP_BASE_URL}enter_questionnaire`,
	accept_offer: `${APP_BASE_URL}accept_offer`,
};
