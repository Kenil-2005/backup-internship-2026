import NavList from "../NavBar/NavList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function Footer({ lang, setLang }) {

    const { t } = useTranslation();

    return (
        <div className='footer-wrapper'>
            <div className='footer-content container'>
                <div className='row'>
                    <div className="col-lg-4 col-md-5 col-12 h-100 m-auto">
                        <h1>{t("Dev")}.</h1>
                    </div>
                    <div className="col-lg-8 col-md-7 col-12">
                        <NavList lang={lang} setLang={setLang} />
                    </div>
                    <hr className='my-3' />
                    <div className="col-lg-6 col-md-6 col-12">
                        <p className='mb-0'>{t("Copyright")}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="social-icon-wrap">
                            <div className="social-icon-content">
                                <p><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></p>
                                <p><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></p>
                                <p><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></p>
                                <p><a href="#"><FontAwesomeIcon icon={faGoogle} /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


Footer.propTypes = {
    lang: PropTypes.string,
    setLang: PropTypes.string
};