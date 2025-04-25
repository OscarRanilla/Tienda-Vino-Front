import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import './PrivateRoute.css';

export default function PrivateRoute({ children }) {
    const { user, loading } = useUser();

    if (loading) {
        // mientras comprobamos sesión
        return <div className="loader"></div>;
    }
    if (!user) {
        // si no hay usuario, redirige a login
        return <Navigate to="/login" replace />;
    }
        // si está logado, renderiza el hijo
    return children;
}
