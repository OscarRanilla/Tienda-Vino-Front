import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className='container-notFound'>
            <h1>404 — Página no encontrada</h1>
            <p>Lo sentimos, esa ruta no existe.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}
