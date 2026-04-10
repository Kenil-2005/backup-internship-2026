import { useTranslation } from "react-i18next";

export default function HeroSection() {

    const { t } = useTranslation();

    return (
        <div className='hero-section-wrapper' id='Home'>
            <div className="background-image">
                <img src="https://picsum.photos/1920/1080" alt="" className="img-fluid" />
            </div>
            <div className="overlay"></div>
            <div className="hero-section-content">
                <div className="row text-white">
                    <div className="col-lg-8 col-12 m-auto text-start">
                        <h1 className="capitalize mb-3">{t("Hero_1")}</h1>
                        <p>{t("Hero_2")}</p>
                        <a href="#" className="secondary-btn">{t("Hero_3")}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
