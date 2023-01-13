import { React, useState, useContext, useEffect } from 'react';
import "./Navbar.scss";
import "./LanguageSwitch.scss";
import { LanguageContext } from '../../context/LanguageProvider';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
const Navbar = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
            });
        };
    }, []);
    return (
        <nav>
                <div className="navbarContainer">
                    {windowSize.width < 670 ? <MobileMenu /> : <DesktopMenu />}
                </div>
                <div className="languageChangerContainer">
                    <label className="switch">
                        <span className={language !== "EN" ? 'languageText translateToES' : "languageText translateToEN"}>{language === "EN" ? "EN" : "ES"}</span>
                        <input type="checkbox" onClick={() => changeLanguage()} />
                        <span className="slider round"></span>
                    </label>
                </div>
        </nav>
    );
}

export default Navbar;
