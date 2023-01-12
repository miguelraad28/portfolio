import React from 'react';
import "./Footer.scss";
const Footer = () => {
    return (
        <footer>
            <div className='footerIcons'>
                <p className="footerIcon">
                    <a target="_blank" href="mailto:miguelraad2020@gmail.com"><i
                        className="bi bi-envelope-fill"></i>miguelraad2020@gmail.com</a></p>
                <p className="footerIcon"><a target="_blank"
                    href="https://www.linkedin.com/in/miguel-raad-desarrollador-web/"><i className="bi bi-linkedin"></i>www.linkedin.com/in/miguel-raad-desarrollador-web/</a></p>
                <p className="footerIcon"><a target="_blank" href="https://github.com/miguelraad28"><i
                    className="bi bi-github"></i>miguelraad28</a></p>
            </div>
        </footer >
    );
}

export default Footer;
