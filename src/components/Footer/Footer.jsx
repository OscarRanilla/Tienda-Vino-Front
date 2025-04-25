import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '/cropped-HOLA.png';

export default function Footer() {
    return (
        <footer className="fc-footer">
            <div className="footer-inner">

                {/* Col‑1  Mapa web */}
                <div className="f-col">
                    <h4>Mapa web</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/shop">Vinos</Link></li>
                        <li><Link to="/about">Nosotros</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                        <li><Link to="/mi-cuenta">Mi cuenta</Link></li>
                    </ul>
                </div>

                {/* Col‑2  Legal */}
                <div className="f-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link to="/envios">Envíos</Link></li>
                        <li><Link to="/devolucion">Devolución y Reembolso</Link></li>
                        <li><Link to="/cancelacion">Cancelación de Pedidos</Link></li>
                        <li><Link to="/privacidad">Política de privacidad</Link></li>
                        <li><Link to="/politica-cookies">Política de cookies</Link></li>
                        <li><Link to="/personalizar-cookies">Personalizar Cookies</Link></li>
                        <li><Link to="/aviso-legal">Aviso legal</Link></li>
                    </ul>
                </div>

                {/* Col‑3  Contacto */}
                <div className="f-col">
                    <h4>Contacto</h4>
                    <p>📞 611 59 87 98<br/>📞 611 69 07 23</p>
                    <p>
                        ✉️&nbsp;
                        <a href="mailto:falconcrestvinos@gmail.com">
                            falconcrestvinos@gmail.com
                        </a>
                    </p>
                </div>

                {/* Logo */}
                <div className="f-logo">
                    <img src={logo} alt="Falcon Crest logo" />
                </div>
            </div>

            <div className="copyright">
                © 2025 Falcon Crest Wines. Todos los derechos reservados.
            </div>
        </footer>
    );
}


