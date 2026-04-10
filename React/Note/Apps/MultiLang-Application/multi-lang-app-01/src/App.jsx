import "./App.css";
import { useTranslation } from "react-i18next";


function App() {

    // useEffect(() => {
    //     console.log('i18n.language:', i18n.language);
    //     console.log('resourceStore:', i18n.services.resourceStore.data);
    //     console.log('getResourceBundle(en, translation):', i18n.getResourceBundle('en', 'translation'));
    // }, []);

    const { t, i18n } = useTranslation();

    const changeLanguageHandler = (e) => {
        i18n.changeLanguage(e.target.value);
        // console.log(i18n.key);
    };

    return (
        <div>
            <h1>{t("welcome")}</h1>
            <p>{t("tagline")}</p>
            <label htmlFor="language-select">{t("choose_language")}: </label>
            <select id="language-select" onChange={changeLanguageHandler} value={i18n.language}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">español</option>
                <option value="ja">Nihongo</option>
                <option value="ar">Arabic</option>
            </select>

            <button>{t("login")}</button>
            <button>{t("logout")}</button>
        </div>
    );
}

export default App;
