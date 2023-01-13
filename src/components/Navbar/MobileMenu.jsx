import { React, useState, useContext } from 'react';
import "./MobileMenu.scss";
import { LanguageContext } from '../../context/LanguageProvider';
const MobileMenu = () => {
    const {language} = useContext(LanguageContext);
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const changeMobileMenuState = () => {
        setMobileMenuOpened(!mobileMenuOpened)
    }
    return (
        <>
            <div className={mobileMenuOpened ? "mobileMenu mobileMenuOpened" : "mobileMenu"} onClick={() => changeMobileMenuState()}>
                <div className='topLine'></div>
                <div className='middleLine'></div>
                <div className='bottomLine'></div>
            </div>
            <div>
                <div className={mobileMenuOpened ? 'showMobileMenuContainer mobileMenuContainer' : "mobileMenuContainer"}>
                    <ul>
                        <li onClick={() => changeMobileMenuState()}><a href="#home">{language === "EN" ? "HOME" : "INICIO"}</a></li>
                        <li onClick={() => changeMobileMenuState()}><a href="#aboutMe">{language === "EN" ? "ABOUT ME" : "SOBRE MÍ"}</a></li>
                        <li onClick={() => changeMobileMenuState()}><a href="#projects">{language === "EN" ? "PROJECTS" : "PROYECTOS"}</a></li>
                        <li onClick={() => changeMobileMenuState()}><a href="#education">{language === "EN" ? "EDUCATION" : "EDUCACIÓN"}</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
