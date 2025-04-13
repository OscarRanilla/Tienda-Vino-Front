import React from 'react';
import './Contact.css';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se conectará con nodemailer o nuestro backend
    };

    return (
        <div className="contact-container">
            <h2 className="contact-title">Contacto</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Tu nombre" required />

                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" placeholder="tucorreo@gmail.com" required />

                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows="4" placeholder="Cuéntanos en qué podemos ayudarte..." required />

                <button type="submit" className="contact-submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;

