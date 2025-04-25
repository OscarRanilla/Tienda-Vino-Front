
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import './Contact.css';

function Contact() {
    const toast = useToast();
    const [form, setForm] = useState({ name:'', phone:'', address:'', email:'', mensaje:'' });
    const UrlApi =import.meta.env.VITE_API_URL + '/contact';
    const handleChange = e =>
        setForm({ ...form, [e.target.id]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch(UrlApi, {
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error('Error enviando el mensaje');
            toast({ title:'Mensaje enviado 👍', status:'success', duration:3000, isClosable:true });
            setForm({ name:'', email:'', message:'' });
        }   catch (err) {
            toast({ title:'Ups… no se pudo enviar', status:'error', duration:3000, isClosable:true });
        }
    };

    return (
        <div className="contact-container">
            <h2 className="contact-title">Contacto</h2>

            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Nombre</label>
                <input id="name" value={form.name} onChange={handleChange} required />

                <label htmlFor="email">Correo electrónico</label>
                <input id="email" type="email"
                    value={form.email} onChange={handleChange} required />

                <label>Teléfono</label>
                <input id="phone" value={form.phone} onChange={handleChange} required />

                <label>Dirección</label>
                <input id="address" value={form.address} onChange={handleChange} required />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" rows="4"
                        value={form.message} onChange={handleChange} required />

                <button type="submit" className="contact-submit">Enviar</button>
            </form>
        </div>
    );
}
export default Contact;


