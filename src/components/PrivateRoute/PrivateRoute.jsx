import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser} from '../../Context/UserContext'
import './PrivateRoute.css';

export default function PrivateRoute({ children }) {
    const { loading, isLoggedIn } = useUser();

    console.log('entra en Protecte route : ' )
    console.log(  loading)
    if (loading) return null; 
    
    return isLoggedIn ? children : <Navigate to="/login" replace />;

}
