import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './CookieBanner.css';

export default function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('cookiesAccepted')) setShow(true);
    }, []);

    const accept = () => {
        localStorage.setItem('cookiesAccepted', 'yes');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="cookie-banner">
            <p>
                Utilizamos cookies propias y de terceros. Consulta nuestra&nbsp;
                <Link to="/politica-cookies">Política de cookies</Link> |&nbsp;
                <Link to="/personalizar-cookies">Personalizar cookies</Link>
            </p>
            <button onClick={accept}>Aceptar Cookies</button>
        </div>
    );
}
