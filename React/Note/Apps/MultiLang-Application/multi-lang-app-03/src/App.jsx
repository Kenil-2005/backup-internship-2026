import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import i18n from "./i18n";
import "./App.css";

export default function App() {

    const [lang, setLang] = useState("en");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        i18n.changeLanguage(lang);

        document.documentElement.dir = i18n.dir(lang);
        setSearchParams({ lng: lang });
    }, [lang, setSearchParams]);
    console.log(searchParams);

    return (
        <>
            <NavBar lang={lang} setLang={setLang} />
            <HeroSection />
            <AboutSection />
            <ContactSection lang={lang} />
            <Footer lang={lang} setLang={setLang} />
        </>
    );
}