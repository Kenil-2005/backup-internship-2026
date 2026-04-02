import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export default function NavList({ lang, setLang }) {
    const { t } = useTranslation();

    const handleChange = (e) => {
        const selectedLang = e.target.value;
        setLang(selectedLang);

        // let loc = "http://localhost:5173/";
        // window.location.replace(
        //     loc + "?lng=" + e.target.value
        // );
    };

    return (
        <ul className="nav-list-content">
            <li><a href='#Home'>{t("Home")}</a></li>
            <li><a href='#About'>{t("About")}</a></li>
            <li><a href='#Project'>{t("Project")}</a></li>
            <li>
                <select value={lang} onChange={handleChange}>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="ja">Japanish</option>
                    <option value="ar">Arabic</option>
                    <option value="he">Hebrew</option>
                    <option value="fa">Persian</option>
                </select>
            </li>
            <li>
                <button className='primary-btn'>{t("Contact")}</button>
            </li>
        </ul>

    );
}

NavList.propTypes = {
    lang: PropTypes.string,
    setLang: PropTypes.string
};