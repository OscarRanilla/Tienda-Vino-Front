import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Shop.css';
import '../../styles/loader.css';

export default function Shop() {
    const { t } = useTranslation();
    const [wines, setWines]     = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState('');

    const urlApi = import.meta.env.VITE_API_URL + '/wines';

    useEffect(() => {
        fetch(urlApi)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log('🛍️ Shop fetched →', data);
                // adaptamos al payload real:
                const arr = data.wines ?? data; 
                setWines(arr);
            })
            .catch(err => {
                console.error(err);
                setError('Error cargando vinos');
            })
            .finally(() => setLoading(false));
        }, [urlApi]);

        if (loading) {
            return (
                <div className="loader-container">
                    <span className="loader"></span>
                </div>
            );
        }
        
        if (error) {
            return <p className="shop-error">{error}</p>;
        }

    return (
        <div className="shop-container">
            <h2 className="shop-title">{t('shop.title') || 'Nuestra Tienda'}</h2>
            <div className="shop-grid">
                {wines.map(wine => (
                    <ProductCard key={wine._id || wine.id} wine={wine} />
                ))}
            </div>
        </div>
    );
}


