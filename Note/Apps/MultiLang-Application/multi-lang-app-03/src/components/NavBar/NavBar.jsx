import NavList from "./NavList";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export default function NavBar({ lang, setLang }) {

    const { t } = useTranslation();

    return (
        <div className="navbar-wrapper">
            <div className="navbar-content container">
                <div className='row'>
                    <div className="col-lg-4 col-md-5 col-12 h-100 m-auto">
                        <h1>{t("Dev")}.</h1>
                    </div>
                    <div className="col-lg-8 col-md-7 col-12 d-lg-block d-md-block d-none">
                        <NavList lang={lang} setLang={setLang} />
                    </div>
                </div>
            </div>
        </div>
    );
}

NavBar.propTypes = {
    lang: PropTypes.string,
    setLang: PropTypes.string
};