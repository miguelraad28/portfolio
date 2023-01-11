import React, {useContext} from 'react';
import { LanguageContext } from '../../context/LanguageProvider';
import "./Home.scss";
const Home = () => {
    const {language} = useContext(LanguageContext);
    return (
        <div id="home">
            <div className="mainContent">
                <p className={language === "EN" ? "line-1 anim-typewriter-EN" : "line-1 anim-typewriter-ES"}>{language === "EN" ? "Hi, I'm Miguel Raad" : "Hola, soy Miguel Raad"}</p>
                <p className="line-2 anim-typewriter2">MERN Stack Developer.</p>
                <div className="navbarIcons">
                    <a className="pop1 popIcon" target="_blank" href="mailto:miguelraad2020@gmail.com"><i
                        className="bi bi-envelope-fill"></i></a>
                    <a className="pop2 popIcon" target="_blank" href="https://github.com/miguelraad28"><i
                        className="bi bi-github"></i></a>
                    <a className="pop3 popIcon" target="_blank"
                        href="https://www.linkedin.com/in/miguel-raad-desarrollador-web/"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div className='arrowContainer'>
                <a href="#aboutMe"><div className='arrowToScrollDown'></div></a>
                <p className='arrowToScrollDownText' style={language !== "EN" ? {width: "131px"} : null}>{language === "EN" ? "¡Get to know me!" : "¡Ven a conocerme!"}</p>
            </div>
        </div >
    );
}

export default Home;
