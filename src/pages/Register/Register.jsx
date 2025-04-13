import React from 'react';
import { useTranslation } from 'react-i18next';
import './Register.css';

function Register() {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de registro, con fetch/axios a nuestro backend
    };

    return (
        <div className="register-container">
            <h2 className="register-title">{t('register.title')}</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <label htmlFor="name">{t('register.name')}</label>
                <input type="text" id="name" required placeholder="John Doe" />

                <label htmlFor="email">{t('register.email')}</label>
                <input type="email" id="email" required placeholder="youremail@gmail.com" />

                <label htmlFor="password">{t('register.password')}</label>
                <input type="password" id="password" required />

                <label htmlFor="confirmPassword">{t('register.confirmPassword')}</label>
                <input type="password" id="confirmPassword" required />

                <button type="submit" className="register-button">
                    {t('register.submit')}
                </button>
            </form>
        </div>
    );
}

export default Register;

