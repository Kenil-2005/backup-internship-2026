import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",

        ns: ["default"],
        defaultNS: "default",

        supportedLngs: ["en", "hi", "fr", "fa", "es", "he", "ja", "ar"],

        backend: {
            loadPath: "/locales/{{lng}}/default.json",
        },
    });

export default i18n;
