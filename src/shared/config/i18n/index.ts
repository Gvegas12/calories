import { default as _i18n } from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const i18n = _i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		ns: [],
		fallbackLng: "ru",
		debug: false,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});
