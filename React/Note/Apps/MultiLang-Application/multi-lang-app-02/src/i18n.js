import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// const apiKey = "https://api.i18nexus.com/project_resources/translations/en/default.json?api_key=fBCJKT1d5sFUGgkIC0b2FA";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/default.json?api_key=fBCJKT1d5sFUGgkIC0b2FA`;

i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // The default language
        fallbackLng: "en",

        ns: ["default"],
        defaultNS: "default",

        // Tt shows the supported languages
        supportedLngs: ["en", "hi", "fr", "es", "ja"],
        backend: {
            loadPath: "/locales/{{lng}}/default.json",
        },
    });