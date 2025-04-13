import React from 'react';
import { useTranslation } from 'react-i18next';
import './Login.css';

function Login() {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí va la lógica de login con fetch o axios
    };

    return (
        <div className="login-container">
            <h2 className="login-title">{t('login.title')}</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="email">{t('login.email')}</label>
                <input type="email" id="email" required placeholder="youremail@gmail.com" />

                <label htmlFor="password">{t('login.password')}</label>
                <input type="password" id="password" required placeholder="********" />

                <button type="submit" className="login-button">
                    {t('login.submit')}
                </button>
            </form>
        </div>
    );
}

export default Login;


