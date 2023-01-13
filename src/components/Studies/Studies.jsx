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
                        <p>
                            <strong>2018-2019</strong> I Web development formation courses of the Ministry of Education in Buenos Aires, Argentina and discovered the passion that I had for coding.
                        </p>
                        <p>
                            <strong>2017-2021</strong> IT oriented High School (Web development and SQL).
                        </p>
                        <p><strong>2022-2023</strong> Full Stack carreer at <a href="https://www.coderhouse.com/">CoderHouse</a>. Front-End web development, JavaScript & ReactJS finished, Back-End currently studying.</p>
                        <p>My Back-End habilities were self-taught, but I'm polishing details at the carreer.</p>
                    </>
                    :
                    <>
                        <p>
                            <strong>2018-2019</strong> Cursos de formación de desarrollo web del Ministerio de Educación en Buenos Aires, Argentina y descubrí la pasión que tenía por la programación.
                        </p>
                        <p>
                            <strong>2017-2021</strong> Educación secundaria con orientación a informática (Desarrollo web y SQL).
                        </p>
                        <p><strong>2022-2023</strong> Carrera Full Stack en <a href="https://www.coderhouse.com/">CoderHouse</a>. Desarrollo web Front-End, JavaScript & ReactJS terminado, estudiando actualmente Back-End.</p>
                        <p>Mis habilidades de Back-End fueron adquiridas de manera autodidacta, sin embargo estoy puliendo detalles en la carrera.</p>
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
