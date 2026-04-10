import Contact from "./Contact";
import PropTypes from "prop-types";
import Form from "./Form";

export default function ContactSection({ lang }) {

    const isRtl = (lang === "ar" || lang === "fa" || lang === "he");

    return (
        <div className='contact-section-wrapper' id='Contact'>
            <div className='contact-section-content container'>
                <div className="row d-flex align-items-center ">
                    <div className={`col-lg-6 col-12 ${isRtl ? "offset-lg-1" : ""}`}>
                        <Form />
                    </div>
                    <div className={`col-lg-5 col-12 pb-lg-0 pb-4 ${isRtl ? "" : "offset-lg-1"}`}>
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
}

ContactSection.propTypes = {
    lang: PropTypes.string
};