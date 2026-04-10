import AboutText from "./AboutText";
import ImageSection from "./ImageSection";

export default function AboutSection() {
    return (
        <div className='about-section-wrapper' id='About'>
            <div className='about-section-content container'>
                <div className='row'>
                    <div className="col-lg-6 col-12 ">
                        <ImageSection />
                    </div>
                    <div className="col-lg-6 col-12">
                        <AboutText />
                    </div>
                </div>

                <hr className="my-5" />

                <div className='row'>
                    <div className="col-lg-6 col-12">
                        <AboutText />
                    </div>
                    <div className="col-lg-6 col-12">
                        <ImageSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
