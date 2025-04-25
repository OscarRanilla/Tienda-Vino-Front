import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './PasswordInput.css';

export default function PasswordInput({ id, name, value, onChange, placeholder }) {
    const [visible, setVisible] = useState(false);
    return (
        <div className="password-field">
            <input
                id={id}
                name={name}
                type={visible ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
            <button
                type="button"
                className="toggle-password"
                onClick={() => setVisible(v => !v)}
                aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
                {visible ? <FaEyeSlash/> : <FaEye/>}
            </button>
        </div>
    );
}
