import React from 'react';
import './Footer.css';
import logoFooter from '/cropped-HOLA.png'

function Footer() {
    return (
        <footer className="fc-footer">
            <div className="footer-left">
                <img src={logoFooter} alt="logo" className="footer-logo" />
            </div>
            <div className="footer-right">
                <p>© 2025 Falcon Crest Wines. Todos los derechos reservados.</p>
                <p>
                    Contacto: <a href="falconcrestvinos@gmail.com">falconcrestvinos@gmail.com</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
