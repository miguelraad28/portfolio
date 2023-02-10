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
<<<<<<< HEAD
                    <>
                        <p>I am a highly motivated 20-year-old web developer and graphic designer based in Argentina. Born in Venezuela, I have a passion for technology and the IT industry, constantly seeking opportunities to learn and grow as a professional.</p><p>With experience in the MERN Stack, I am capable of delivering full-stack web solutions. My expertise in ReactJS and NodeJS, along with my knowledge of Express, MongoDB, and Mongoose, enables me to bring dynamic and responsive websites to life.</p>
                        <p>As I look ahead, I am eager to dive into the world of mobile app development using React Native. I am also interested in exploring the potential of blockchain technology and its applications in transfers.</p>
                        <p>I am always seeking new challenges and opportunities to showcase my skills and advance my knowledge. If you're looking for a talented and enthusiastic web developer, I would love the chance to work with you and bring your project to life.</p>
                    </>
                    :
                    <>
                        <p>Soy un desarrollador web y diseñador gráfico altamente motivado de 20 años, ubicado en Argentina, nacido en Venezuela. Tengo una pasión por la tecnología y la industria IT, y busco constantemente oportunidades para aprender y crecer como profesional.</p>
                        <p>Con experiencia en el stack MERN, soy capaz de entregar soluciones web full-stack. Mi experiencia en ReactJS y NodeJS, junto con mi conocimiento de Express, MongoDB y Mongoose, me permite dar vida a sitios web dinámicos y responsive.</p>
                        <p>Mientras avanzo en el stack MERN, estoy ansioso por sumergirme en el mundo del desarrollo de aplicaciones móviles utilizando React Native. También estoy interesado en explorar el potencial de la tecnología blockchain.</p>
                        <p>Siempre estoy buscando nuevos desafíos y oportunidades para demostrar mis habilidades y ampliar mi conocimiento. Si estás buscando un desarrollador web talentoso y entusiasta, me encantaría tener la oportunidad de trabajar contigo y hacer realidad tu proyecto.</p>
=======
                    <><p>I am a young venezuelan living in Argentina and at my 20 years old I am a MERN Stack web
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
>>>>>>> 5bcfc0ce8776785371548b4e610adb715baa2b30
                    </>}
            </div>
        </div>
    );
}

export default AboutMe;
