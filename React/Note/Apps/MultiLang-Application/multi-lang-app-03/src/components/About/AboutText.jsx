import { useTranslation } from "react-i18next";

export default function AboutText() {

    const { t } = useTranslation();

    return (
        <>
            <div className='about-text-wrap h-100'>
                <div className="about-bottom-thumb h-100 align-content-center">
                    <small className="capitalize">{t("About_1")}</small>
                    <h3 className="capitalize">{t("About_2")}</h3>
                    <p>{t("About_3")}</p>
                    <a href="#" className="primary-btn ms-0">{t("About_4")}</a>
                </div>
            </div>
        </>
    );
}
