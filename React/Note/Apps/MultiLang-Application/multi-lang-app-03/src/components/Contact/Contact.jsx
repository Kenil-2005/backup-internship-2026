import { useTranslation } from "react-i18next";

export default function Contact() {

    const { t } = useTranslation();

    return (
        <div className="contact-wrap">
            <h2 className="fs-lg-58 pb-2">{t("Contact Us")}</h2>
            <p>{t("Contact_1")}</p>
            <div className="row pt-2">
                <div className="col-lg-12 col-12">
                    <div
                        className="d-flex align-items-center font-lg-20 font-lg-14 gap-2 gap-lg-3 contacticons">
                        <a href="mailto:contact@email.com"
                            className="d-flex align-items-center">
                            contact@email.com
                        </a>
                    </div>
                </div>
                <div className="col-lg-12 col-12 pb-2 pt-lg-2">
                    <div
                        className="d-flex align-items-center font-lg-20 font-lg-14 gap-2 gap-lg-3 contacticons">
                        <a href="tel:+911234567890" className="d-flex align-items-center contact-number">
                            <span>+</span> 911234567890
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
