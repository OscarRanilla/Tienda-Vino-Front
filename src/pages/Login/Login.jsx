import React, { useState } from 'react';
import { loginUser, passwordRecovery } from '../../Services/authService';
import { useTranslation } from 'react-i18next';
import { useToast } from '@chakra-ui/react';
import './Login.css';
import PasswordInput from '../../components/PasswordInput/PasswordInput'; 
import { useNavigate } from 'react-router-dom'; 
import { useUser } from '../../Context/UserContext';

export default function Login() {
    const { t } = useTranslation();
    const toast = useToast();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);
    const navigate = useNavigate(); 
    const { setUser } = useUser(); 

    const handleSubmit = async e => {
        e.preventDefault();
        try {

            const user =await  loginUser(email, password); 
            if (user) {
                setUser(user); // actualizamos el contexto
                toast({
                    title: t('login.success') || 'Sesión iniciada',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                 navigate('/dashboard'); // redirigimos
            } else {  
                toast({
                    title: t('login.error') || 'Credenciales incorrectas',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
                
            }

        }   catch (err) {
            toast({
                title: t('login.error') || 'Error al iniciar sesión',
                description: err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handlePasswordReset = async e => {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(resetEmail)) {
            setError('Correo no válido');
            return;
        }
        try {
            await passwordRecovery(resetEmail);
            toast({
                title: 'Correo enviado',
                description: 'Revisa tu bandeja para restablecer contraseña.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setShowResetPassword(false);
        }   catch (err) {
            toast({
                title: 'Error',
                description: 'No se pudo enviar el correo.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            setError('Hubo un problema al enviar el correo de recuperación.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">{t('login.title')}</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <label htmlFor="email">{t('login.email')}</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="youremail@gmail.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">{t('login.password')}</label>
                        <PasswordInput
                        id="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="********"
                    />

                    <button type="submit" className="login-button">
                        {t('login.submit')}
                    </button>
                </form>

                <div className="password-recovery">
                    <button
                        type="button"
                        onClick={() => setShowResetPassword(true)}
                        className="recovery-button"
                    >
                        {t('login.forgotPassword')}
                    </button>
                </div>

                {showResetPassword && (
                    <div className="reset-password-container">
                        <h3>{t('login.resetPasswordTitle')}</h3>
                        <input
                            type="email"
                            placeholder={t('login.enterEmail')}
                            value={resetEmail}
                            onChange={e => setResetEmail(e.target.value)}
                        />

                        <div className="reset-actions">
                            <button
                                onClick={handlePasswordReset}
                                className="reset-button"
                            >
                                {t('login.sendResetLink')}
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowResetPassword(false)}
                                className="cancel-button"
                            >
                                {t('login.cancel')}
                            </button>
                        </div>

                        {error && <p className="error-message">{error}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}




