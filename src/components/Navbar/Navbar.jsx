import { React, useState, useContext } from 'react';
import "./Navbar.scss";
import { LanguageContext } from '../../context/LanguageProvider';
const Navbar = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [navbar, setNavbar] = useState(false);
    const activateNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener("scroll", activateNavbar)
    const changeLanguage = () => {
        if (language === "EN") {
            setLanguage("ES")
        } else {
            setLanguage("EN")
        }

    }
    return (
        <nav>
            <div className={navbar ? "scrollDown0 scrollDown" : "scrollDown0"}>
                <div className="navbarContainer">
                    <ul>
                        <li><a href="#home">{language === "EN" ? "HOME" : "INICIO"}</a></li>
                        <li><a href="#aboutMe">{language === "EN" ? "ABOUT ME" : "SOBRE MÍ"}</a></li>
                        <li><a href="#education">{language === "EN" ? "EDUCATION" : "EDUCACIÓN"}</a></li>
                        <li><a href="#projects">{language === "EN" ? "PROJECTS" : "PROYECTOS"}</a></li>
                    </ul>
                </div>
                <div className={navbar ? "languageChangerContainer0 languageChangerContainer" : "languageChangerContainer0"}>
                    <label className="switch">
                        <span className={language !== "EN" ? 'languageText translateToES' : "languageText translateToEN"}>{language === "EN" ? "EN" : "ES"}</span>
                        <input type="checkbox" onClick={() => changeLanguage()} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
