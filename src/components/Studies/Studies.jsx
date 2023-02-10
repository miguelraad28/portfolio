import React, { useContext } from 'react';
import "./Studies.scss";
import { LanguageContext } from '../../context/LanguageProvider';
const Studies = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div id="education">
            <div className="sectionTitle">
                <h2>{language === "EN" ? "EDUCATION" : "EDUCACIÓN"}</h2>
            </div>
            <div className='infoEducation'>
                {language === "EN" ?
                    <>
                        <p><strong>2022-2023</strong> Full Stack Career at <a href="https://www.coderhouse.com/">CoderHouse</a>. Completed Front-End web development with JavaScript and ReactJS; currently studying Back-End.</p>
                        <p>
                            <strong>2018-2019</strong> Web development training courses from the Ministry of Education in Buenos Aires, Argentina. Discovered my passion for programming.
                        </p>
                        <p>
                            <strong>2017-2021</strong> Secondary education with a focus on computer science, including web development and SQL.
                        </p>
                        <p>My Back-End skills were acquired through self-study, but I am refining them in my current career. I am always seeking opportunities to expand my knowledge and improve my web development abilities.</p>
                    </>
                    :
                    <>
                        <p><strong>2022-2023</strong> Carrera Full Stack en <a href="https://www.coderhouse.com/">CoderHouse</a>. Desarrollo web Front-End con JavaScript y ReactJS completados; actualmente estudiando Back-End.</p>
                        <p>
                            <strong>2018-2019</strong> Cursos de formación de desarrollo web del Ministerio de Educación en Buenos Aires, Argentina. Descubrí mi pasión por la programación.
                        </p>
                        <p>
                            <strong>2017-2021</strong>  Educación secundaria con orientación a informática, incluyendo desarrollo web y SQL.
                        </p>
                        <p>Mis habilidades en Back-End las adquirí de manera autónoma, pero estoy perfeccionándolas en mi carrera actual. Estoy constantemente buscando oportunidades para ampliar mis conocimientos y mejorar mis habilidades en el desarrollo web.</p>
                    </>}
                <h3>{language === "EN" ? "CERTIFICATIONS" : "CERTIFICADOS"}</h3>
                <div className='certifications'>
                    <a href="https://www.coderhouse.com/certificados/629bebda884e6700249156cd" target="_blank"><button className='btn btn-frontend'><p><i className="bi bi-award-fill"></i>Front-End</p></button></a>
                    <a href="https://www.coderhouse.com/certificados/630fccb0fb0ec801c2ae957f" target="_blank"><button className='btn btn-js'><p><i className="bi bi-award-fill"></i>JavaScript</p></button></a>
                    <a href="https://www.coderhouse.com/certificados/6372e2e79030a2000ea13382" target="_blank"><button className='btn btn-website'><p><i className="bi bi-award-fill"></i>ReactJs</p></button></a>
                </div>
            </div>
        </div>
    );
}

export default Studies;
