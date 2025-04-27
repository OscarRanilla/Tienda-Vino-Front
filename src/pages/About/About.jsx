import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about-container">
            {/* Header con vídeo de fondo */}
            <section className="about-intro">
                <video autoPlay muted loop src="/videos/background.mp4" />
                <div className="intro-overlay">
                    <h2>Falcon Crest Wines Lovers</h2>
                    <p>
                        Aquí comienza nuestra historia... En Marbella, Falcon Crest Wine Lovers surge como
                        una fuente de inspiración para los apasionados del vino. Desde el cultivo de la vid
                        hasta la copa, este universo ofrece un sinfín de historias y tradiciones. Conocer a
                        las personas detrás de cada etapa —viñadores, bodegueros, enólogos y hosteleros— es
                        el motor de esta empresa.
                    </p>
                </div>
            </section>

            {/* Sección Vinos Tintos */}
            <section id="tintos" className="about-section">
                <div className="section-overlay">
                    <h3>Vinos Tintos</h3>
                    <p>
                        La D.O. Ribera del Duero se extiende al este de Valladolid, con viñedos en alturas entre
                        700 y 1.100 metros. La Tempranillo —tinta fina del país— ofrece estructura, color intenso
                        y aromas de frutos del bosque. Maridajes: Roble con hamburguesas premium y tapas; Crianza
                        con estofados y roast beef; Vendimia Seleccionada con quesos curados y carnes especiadas.
                    </p>
                </div>
            </section>

            {/* Sección Vinos Blancos */}
            <section id="blancos" className="about-section">
                <div className="section-overlay">
                    <h3>Vinos Blancos</h3>
                    <h4>Vino Blanco, Rueda</h4>
                    <p>
                        Rueda, con siglos de historia, forjó un fuerte vínculo entre tierra y vid. La Verdejo,
                        con acidez fresca y notas herbáceas, se defiende como primer DO en Castilla y León.
                    </p>
                </div>
            </section>

            {/* Sección Maridajes */}
            <section id="maridaje" className="about-section">
                <div className="section-overlay">
                    <h4>Características y Maridajes</h4>
                    <p>
                        La Verdejo aporta toques frutales y final persistente. Ideal con ensaladas, arroces,
                        paellas, pescados y mariscos.</p>
                </div>
            </section>
        </div>
    );
}



