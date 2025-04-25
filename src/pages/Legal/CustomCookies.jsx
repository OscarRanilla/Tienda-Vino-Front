import './Legal.css';
export default function CustomCookies(){
    const acceptAll=()=>{
        localStorage.setItem('cookiesAccepted','yes');
        window.location.href='/';
    };
    return(
        <main className="legal-page">
            <h1>Personalizar Cookies</h1>
                <p>
                    Este sitio Web utiliza cookies propias  para su correcto funcionamiento. 
                    Al hacer clic en el botón Aceptar, acepta el uso de estas tecnologías y 
                    el procesamiento de sus datos para estos propósitos. 
                </p>
            <div className="cookie-btns">
                <button className="btn-reject">Rechazar</button>
                <button className="btn-accept" onClick={acceptAll}>
                    ACEPTAR TODAS LAS COOKIES
                </button>
            </div>
            <h2>Cookies técnicas</h2>
                <p>
                    Son aquellas que permiten a los usuarios registrados navegar a través 
                    del sitio Web, del área restringida y a utilizar sus diferentes funciones, 
                    como por ejemplo, el sistema de comentarios o el buscador y no pueden ser desactivadas.
                </p>
        </main>
    );
}