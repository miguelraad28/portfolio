import React, {useContext} from 'react';
import "./Projects.scss";
import { LanguageContext } from '../../context/LanguageProvider';
const Project = ({projectMockup, linkToCode, linkToWebsite, projectDescription}) => {
    const {language} = useContext(LanguageContext);
    return (
        <div className="project animatedBg">
            <img src={projectMockup} alt="project"/>
            <div className='projectButtons'>
                <a href={linkToCode} target="_blank"><button className='btn btn-code'><p><i className="bi bi-github"></i>{language === "EN" ? "CODE" : "CÓDIGO"}</p></button></a>
                <a href={linkToWebsite} target="_blank"><button className='btn btn-website'><p><i className="bi bi-arrow-up-right-circle-fill"></i>{language === "EN" ? "WEBSITE" : "SITIO WEB"}</p></button></a>
            </div>
            <p className='projectDescription'>{projectDescription}</p>
        </div>
    );
}

export default Project;
