import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import './Register.css';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

export default function Register() {
    const { t } = useTranslation();
    const toast = useToast();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = e =>
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const validatePassword = pwd =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/#._-]).{7,}$/.test(pwd);

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        if (form.password !== form.confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }
        if (!validatePassword(form.password)) {
            setError(
                'La contraseña debe tener mínimo 7 caracteres, mayúscula, minúscula, número y carácter especial.'
            );
            return;
        }
        try {
            const { confirmPassword, ...payload } = form;
            await axios.post(import.meta.env.VITE_API_URL + '/register', payload);
            toast({
                title: 'Usuario creado con éxito',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            navigate('/login');
        }   catch (err) {
            toast({
                title: 'Error al registrar',
                description: err.response?.data?.message || err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            setError('Hubo un error al registrar el usuario.');
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-title">{t('register.title')}</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <label htmlFor="username">{t('register.name')}</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="John Doe"
                    value={form.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">{t('register.email')}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="youremail@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">{t('register.password')}</label>
                <PasswordInput
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />

                <label htmlFor="confirmPassword">{t('register.confirmPassword')}</label>
                <PasswordInput
                    id="confirmPassword"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />

                {error && <p className="error-message">{error}</p>}

                <button
                    type="submit"
                    className="register-button"
                    disabled={!form.password || form.password !== form.confirmPassword}
                >
                    {t('register.submit')}
                </button>
            </form>
        </div>
    );
}


