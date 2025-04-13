import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdLogin } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import './Navbar.css';
import logo from '/cropped-HOLA.png';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/">
                    {/* logo a la izquierda */}
                        <img src={logo} alt="logo" className="nav-logo" />
                </Link>
                {/* Nombre de marca */}
                <Link to="/" className="nav-brand">{t('nav.brand')}</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/shop">{t('nav.shop')}</Link></li>
                <li><Link to="/about">{t('nav.about')}</Link></li>
                <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
            <ul className="nav-auth">
                <li>
                    <Link to="/login" className="nav-icon">
                        {/* Ícono de login */}
                        <MdLogin size={20} style={{ marginRight: '0.3rem' }} />
                        {t('nav.login')}
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="nav-icon">
                        {/* Ícono de registro */}
                        <FaUserPlus size={18} style={{ marginRight: '0.3rem' }} />
                        {t('nav.register')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;