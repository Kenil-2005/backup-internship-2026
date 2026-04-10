import  { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { value: "", text: "Options" },
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "fr", text: "French" },
    { value: "es", text: "Spanish" },
    { value: "ja", text: "Japanese" },
];

function App() {
    const { t, i18n } = useTranslation();

    const [lang, setLang] = useState("en");

    const handleChange = (e) => {
        const selectedLang = e.target.value;
        setLang(selectedLang);
        i18n.changeLanguage(e.target.value);
        // i18n.changeLanguage(selectedLang);
    };

    return (
        <div className="App">

            <h1>{t("welcome")}</h1>
            <p>{t("tagline")}</p>
            <label>{t("choose_language")}</label>
            <select value={lang} onChange={handleChange}>
                {languages.map((item) => {
                    return (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.text}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default App;