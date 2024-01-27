import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18nForTests = i18n;

i18nForTests
	.use(Backend)
	.use(initReactI18next)
	.init({
		ns: ["Common"],
		fallbackNS: "Common",
		lng: "ru",
		fallbackLng: "ru",
		debug: false,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			loadPath: "locales/{{lng}}/{{ns}}.json",
		},
	});

export default i18nForTests;
