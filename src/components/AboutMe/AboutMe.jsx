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
                {language === "EN" ?
                    <><p>I am a youngh Venezuelan living in Argentina and at my 20 years old I am a MERN Stack web
                        developer and graphic designer. Exited about keep learning and working with what I love that it's the IT
                        area.</p>
                        <p>At this moment I'm capable to create a Full Stack website, which includes a very nice Front-End and a complete Back-End server managed with Node, Express, MongoDB & Mongoose.</p>
                        <p>My nexts steps are focused on mobile apps development with React Native and blockchain transfers</p>
                    </>
                    :
                    <>
                        <p>Soy un joven venezolano viviendo en Argentina y a mis 20 años soy MERN Stack web y diseñador gráfico. Emocionado por seguir aprendiendo y trabajando con lo que amo que es el área de IT.</p>
                        <p>En este momento soy capaz de crear un sitio web Full Stack, que incluye un muy buen Front-End y un completo servidor Back-End administrado con Node, Express, MongoDB y Mongoose.</p>
                        <p>Mis próximos pasos se centran en el desarrollo de aplicaciones móviles con React Native y transferencias blockchain</p>
                    </>}
            </div>
        </div>
    );
}

export default AboutMe;
