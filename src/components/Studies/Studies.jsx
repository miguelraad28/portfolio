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
                            My formal IT education started between 2018 and 2019, I took courses of web development from the Ministry of Education in Buenos Aires, Argentina and discovered the passion that I had for coding.
                        </p>
                        <p>
                            I went to a IT oriented high school and learned basics of HTML, CSS, JavaScript & SQL. (Finished 2021)
                        </p>
                        <p>And after these little knowledges that I was adquiring, i got to the biggest part of my path. March 2022, I started the FULL STACK Developer carreer in <a href="https://www.coderhouse.com/">CoderHouse</a>, went throgh Front-End (HTML, CSS, SCSS, Bootstrap, Git, GitHub, FileZilla, JavaScript, ReactJs) and a little of Back-End(NodeJs, Firebase). In the mid time of the courses I've been studing by my self too, for example, the creation of a complete Back-End from scratch, Admin Panel for ecommerces, upload, update, modify visibility, prices & stock of products, users administration, sales, etc.</p>
                        <p>And now, January 2023 the beginning of the end starts, Back-End Development in CoderHouse, to polish details and finish expanding my knowledge in the MERN Stack Web Development branch.</p>
                    </>
                    :
                    <>
                        <p>
                            Mi educación formal en IT comenzó entre 2018 y 2019, realicé cursos de desarrollo web del Ministerio de Educación en Buenos Aires, Argentina y descubrí la pasión que tenía por la programación.
                        </p>
                        <p>
                            Me eduqué en una escuela secundaria orientada en Informática y aprendí los conceptos básicos de HTML, CSS, JavaScript y SQL. (Terminado en 2021)
                        </p>
                        <p>Y luego de esos pequeños conocimientos que fui adquiriendo, llegué a la parte más importante de mi camino como futuro programador. Marzo de 2022, comencé la carrera de Desarrollador FULL STACK en <a href="https://www.coderhouse.com/">CoderHouse</a>, pasé por Front-End (HTML, CSS, SCSS, Bootstrap, Git, GitHub, FileZilla, JavaScript, ReactJs) y un poco de Back-End (NodeJs, Firebase). Entre medio de los cursos también he estado estudiando por mi cuenta, por ejemplo, la creación de un Back-End completo desde cero, Panel de administración de e-commerces, carga, actualización, modificación de visibilidad, precios & stock de productos, administración de usuarios, ventas, etc.</p>
                        <p>Y ahora, Enero de 2023 comienza el principio del fin, Desarrollo Back-End en CoderHouse, para pulir detalles y terminar de ampliar mis conocimientos en la rama de un MERN Stack Web Developer.</p>
                    </>}
            </div>
        </div>
    );
}

export default Studies;
