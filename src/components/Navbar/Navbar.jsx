import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdLogin } from 'react-icons/md';
import { FaUserPlus, FaUserCircle, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import { useUser } from '../../Context/UserContext';
import { useCart } from '../../Context/CartContext';
import './Navbar.css';

export default function Navbar() {
    const { t } = useTranslation();
    const { user, loading, setUser } = useUser();
    const { totalCount } = useCart();
    const navigate = useNavigate();
    const logoutUrl = `${import.meta.env.VITE_API_URL}/logout`;

    const handleLogout = async () => {
        try {
            await fetch(logoutUrl, { method: 'GET', credentials: 'include' });
            localStorage.removeItem('user');
            setUser(null);
            navigate('/');
        }   catch (err) {
            console.error(err);
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/"><img src="/cropped-HOLA.png" alt="logo" className="nav-logo" /></Link>
                <Link to="/" className="nav-brand">Falcon Crest Wines</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/shop">{t('nav.shop', 'Tienda')}</Link></li>
                <li><Link to="/about">{t('nav.about', 'Nosotros')}</Link></li>
                <li><Link to="/contact">{t('nav.contact', 'Contacto')}</Link></li>
            </ul>
            <ul className="nav-auth">
            {/* carrito como ruta */}
            <li>
                <Link to="/cart" className="nav-icon">
                    <FaShoppingCart size={18} />
                    {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
                </Link>
            </li>
            {loading ? (
                <li><span className="loader navbar-loader" /></li>
            )   : user ? (
                <>
                    <li className="nav-user">
                        <FaUserCircle size={18} /> <span className="user-greeting">Hola, {user.sanitizedUsername || user.email}</span>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="nav-icon">
                            <FaSignOutAlt size={16} /> Cerrar sesión
                        </button>
                    </li>
                </>
            )   : (
                <>
                    <li>
                        <Link to="/login" className="nav-icon">
                            <MdLogin size={20} /> {t('nav.login')}
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="nav-icon">
                            <FaUserPlus size={18} /> {t('nav.register')}
                        </Link>
                    </li>
                </>
            )}
            </ul>
        </nav>
    );
}