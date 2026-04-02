import { useTranslation } from "react-i18next";

export default function Form() {

    const { t } = useTranslation();

    return (
        <div className="bg-white rounded-4 px-4 py-2 contactform">
            <form id="contactForm" action="#">
                <div className="mb-4 mt-2 mt-lg-4">
                    <label className="form-label">{t("Name")}</label>
                    <input type="text" className="form-control form-control-lg" id="name"
                        placeholder={t("Form_1")} name="name" required="required" />
                </div>
                <div className="mb-4">
                    <label className="form-label">{t("Email")}</label>
                    <input type="text" className="form-control form-control-lg" id="email"
                        placeholder={t("Form_2")} name="email" required="required" />
                </div>
                <div className="mb-4">
                    <label className="form-label">{t("Message")}</label>
                    <textarea className="form-control" rows="5" id="comment" name="comment"
                        required="required" placeholder={t("Form_3")}></textarea>
                </div>
                <div className="mb-4">
                    <a href="#" className="primary-btn ms-0">{t("Contact Us")}</a>
                </div>
            </form>
        </div>
    );
}
