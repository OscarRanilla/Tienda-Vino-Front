import './Contact.css';
import axios from 'axios';
import React, { useState } from 'react';

function Contact() {
      const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        mensaje: ''
      });
    
      const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const UrlApi =import.meta.env.VITE_API_URL + '/contact';

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             // Validación del email y del telèfono
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[0-9]{7,}$/;

            if (!emailRegex.test(formData.email)) {
                alert('Por favor ingresa un correo electrónico válido.');
                return;
            }

            if (!phoneRegex.test(formData.phone)) {
                alert('Por favor ingresa un número de teléfono válido (solo números, mínimo 7 dígitos).');
                return;
            }



          await axios.post(UrlApi, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          // Limpiar los campos
          setFormData({
            name: '',
            phone: '',
            address: '',
            email: '',
            mensaje: ''
          });

          alert('Mensaje enviado con éxito.');

        } catch (error) {
            console.log(error)
          alert('Hubo un error al enviar el mensaje.');
        }
      };


    

    return (
        <div className="contact-container">
            <h2 className="contact-title">Contacto</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name"  name="name" placeholder="Tu nombre" required  value={formData.name} onChange={handleChange}/>

                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email"  name="email" placeholder="tucorreo@gmail.com" required value={formData.email} onChange={handleChange} />

                <label htmlFor="phone">Teléfono</label>
                <input type="text" id="phone" name="phone" value={formData.phone}onChange={handleChange} placeholder="Tu número de contacto"  required  />

                <label htmlFor="address">Dirección</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Tu dirección" required />

                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="mensaje" rows="4" placeholder="Cuéntanos en qué podemos ayudarte..."  onChange={handleChange} value={formData.mensaje} required />

                <button type="submit" className="contact-submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;

