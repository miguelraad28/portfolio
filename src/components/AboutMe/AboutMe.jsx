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
                    <><p>I am a youngh venezuelan living in Argentina and at my 20 years old I am a MERN Stack web
                        developer and graphic designer. Exited about keep learning and working with what I love that it's the IT
                        area.</p>
                        <p>At this moment I'm qualified to create a Full Stack website, for the Front-End I usually use ReactJs and the Back-End with NodeJs, Express, MongoDB & Mongoose.</p>
                        <p>My nexts steps are focused on mobile app development with React Native and blockchain transfers.</p>
                    </>
                    :
                    <>
                        <p>Soy un joven venezolano viviendo en Argentina y a mis 20 años soy MERN Stack web developer y diseñador gráfico. Emocionado por seguir aprendiendo y trabajando con lo que amo que es el área de IT.</p>
                        <p>En este momento estoy capacitado para crear un sitio web Full Stack, el Front-End lo suelo trabajar en ReactJS y el Back-End con NodeJs, Express, MongoDB & Mongoose.</p>
                        <p>Mis próximos pasos se centran en el desarrollo de aplicaciones móviles con React Native y transferencias blockchain.</p>
                    </>}
            </div>
        </div>
    );
}

export default AboutMe;
