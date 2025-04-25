import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // <- nuevo
    const UrlApi = import.meta.env.VITE_API_URL + '/checkSession';
    const navigate = useNavigate(); // <- para redirigir




    useEffect(() => {
        const verifySession = async () => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setLoading(false);
        return;
        }

        const hasCookie = document.cookie.includes(import.meta.env.VITE_SECRET_WORD);
        if (!hasCookie) {
            setUser(false);
            setLoading(false);
        return;
        }

        try {
        const res = await fetch(UrlApi, { credentials: 'include' });
        const data = await res.json();
        if (data.success && data.user) {
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
        } else {
            setUser(false);
        }
        } catch (err) {
            setUser(false);
        } finally {
            setLoading(false);
        }
    };

    verifySession();
    }, []);


  //Redirige automáticamente si el usuario no está logueado
    useEffect(() => {

    if (!loading && user === false) {
        navigate("/");
    }

    }, [user, loading]);

    return (
    <UserContext.Provider value={{ user, setUser }}>
        {!loading && children}
    </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}





