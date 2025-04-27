import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className="container-notFound">
            <div className="notfound-overlay">
                <h1 className="notfound-title">404 — Página no encontrada</h1>
                <p className="notfound-text">Lo sentimos, esa ruta no existe.</p>
                <Link to="/" className="notfound-button">
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}

