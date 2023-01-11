import React, {useContext} from 'react';
import Language from './Language';
import "./Languages.scss";
import { LanguageContext } from '../../context/LanguageProvider';
const Languages = () => {
    const {language} = useContext(LanguageContext);
    return (
        <div id="languages">
            <div className="sectionTitle">
                <h2>{language === "EN" ? "LANGUAGES & TOOLS" : "LENGUAJES & HERRAMIENTAS"}</h2>
            </div>
            <div className="languagesIcons">
                <Language glow={"0 0 10px #ff7300"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"} alt={"html"}/>
                <Language glow={"0 0 10px #009dff"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"} alt={"css"}/>
                <Language glow={"0 0 10px #ff00b7"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"} alt={"scss"}/>
                <Language glow={"0 0 10px #a400eb"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"} alt={"bootstrap"}/>
                <Language glow={"0 0 10px #ffd000"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} alt={"javascript"}/>
                <Language glow={"0 0 10px #00d5ff"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"} alt={"reactjs"}/>
                <Language glow={"0 0 10px #7bff00"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} alt={"nodejs"}/>
                <Language glow={"0 0 10px #531a00"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"} alt={"expressjs"}/>
                <Language glow={"0 0 10px #2b9800"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} alt={"mongodb"}/>
                <Language glow={"0 0 10px #ff4d00"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} alt={"git"}/>
                <Language glow={"0 0 10px #000000"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"} alt={"github"}/>
                <Language glow={"0 0 10px #001aff"} languageIcon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"} alt={"photoshop"}/>
            </div>
        </div>
    );
}

export default Languages;
