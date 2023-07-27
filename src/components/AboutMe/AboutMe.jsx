import React, { useContext } from 'react';
import "./AboutMe.scss";
import { LanguageContext } from '../../context/LanguageProvider';
const AboutMe = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div id="aboutMe">
            <div className="sectionTitle">
                <h2>{language === "EN" ? "ABOUT ME" : "SOBRE MÍ"}</h2>
            </div>
            <div className="infoAboutMe">
            <div className='profileImgContainer'>

                <img className='profileImg' src="./images/profile.png" />
                <div className='profileImgBorder'></div>
            </div>
            {language === "EN" ?
                <>
                    <p>I am a web developer and graphic designer based in Argentina. My expertise lies in the MERN stack, allowing me to create dynamic and responsive full-stack websites using ReactJS, NodeJS, Express, MongoDB, and Mongoose.</p>

                    <p>Currently, I am focused on expanding my skills towards mobile app development with React Native and exploring the potential of blockchain technology.</p>

                    <p>If you are looking for a talented web developer for your project, I would be delighted to work with you!</p>
                </>
                :
                <>
                    <p>Desarrollador web y diseñador gráfico ubicado en Argentina. Mi especialidad es el stack MERN, lo que me permite crear sitios web full-stack dinámicos y responsive utilizando ReactJS, NodeJS, Express, MongoDB y Mongoose.</p>

                    <p>Actualmente, estoy enfocado en expandir mis habilidades hacia el desarrollo de aplicaciones móviles con React Native y explorar el potencial de la tecnología blockchain.</p>

                    <p>Si buscas un desarrollador web talentoso para tu proyecto, ¡estaré encantado de trabajar contigo!</p>


                </>}
        </div>
        </div >
    );
}

export default AboutMe;
