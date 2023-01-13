import React, { useContext } from 'react';
import Project from './Project';
import "./Projects.scss";
import { LanguageContext } from '../../context/LanguageProvider';

const Projects = () => {
    const { language } = useContext(LanguageContext);
    return (

        <div id="projects">
            <div className="sectionTitle">
                <h2>{language === "EN" ? "PROJECTS I HAVE MADE" : "PROYECTOS QUE HE REALIZADO"}</h2>
            </div>
            <div className='projectsGrid'>
                <Project projectMockup={"./images/mockupproject4.png"} linkToCode={"https://github.com/miguelraad28/portfolio"} linkToWebsite={"https://portfolio-miguelraad28.vercel.app/"} projectDescription={language === "EN" ? "Portfolio for me :). ReactJS, SCSS & BootstrapIcons + Projects Mockup" : "Mi portafolio :). ReactJS, SCSS & BootstrapIcons + Mockup de los proyectos"} />
                <Project projectMockup={"./images/mockupproject2.png"} linkToCode={"https://github.com/miguelraad28/mauvecinasociados"} linkToWebsite={"https://mauvecinasociados.com.ar"} projectDescription={language === "EN" ? "Landing page for accounting studio. HTML, SCSS, Bootstrap, JS & FormSubmit.co + Logo & icons design" : "Landing page para estudio contable. HTML, SCSS, Bootstrap, JS & FormSubmit.co + Diseño de logo e íconos"} />
                <Project projectMockup={"./images/mockupproject1.png"} linkToCode={"https://github.com/miguelraad28/proyecto-sass"} linkToWebsite={"https://miguelraad28.github.io/proyecto-sass/"} projectDescription={language === "EN" ? "Front-end part of a holistic ecommerce. HTML, SCSS, Bootstrap, Vanilla JS & Database simulation with JSON + Banners design" : "Desarrollo Front-end de un ecommerce holistico. HTML, SCSS, Bootstrap, Vanilla JS & Simulación de BDD con archivo JSON + Diseño de banners"} />
                <Project projectMockup={"./images/mockupproject3.png"} linkToCode={"https://github.com/miguelraad28/hideawaycoffee"} linkToWebsite={"https://miguelraad28.github.io/hideawaycoffee/"} projectDescription={language === "EN" ? "Landing page for a London Coffee Shop. HTML & SCSS + Banners Collage" : "Landing page para una cafetería en Londres. HTML & SCSS + Collage de los banners"} />
            </div>
        </div >


    );
}

export default Projects;
