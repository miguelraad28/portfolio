import React, {useContext} from 'react';
import { LanguageContext } from '../../context/LanguageProvider';
const DesktopMenu = () => {
    const {language} = useContext(LanguageContext);
    return (
        <ul>
            <li><a href="#home">{language === "EN" ? "HOME" : "INICIO"}</a></li>
            <li><a href="#aboutMe">{language === "EN" ? "ABOUT ME" : "SOBRE MÍ"}</a></li>
            <li><a href="#education">{language === "EN" ? "EDUCATION" : "EDUCACIÓN"}</a></li>
            <li><a href="#projects">{language === "EN" ? "PROJECTS" : "PROYECTOS"}</a></li>
        </ul>
    );
}

export default DesktopMenu;
