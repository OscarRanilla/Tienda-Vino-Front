import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../Context/CartContext';
import './WineDetail.css';
import '../../styles/loader.css';

export default function WineDetail() {
    const { id } = useParams();
    const { t } = useTranslation();
    const { addToCart } = useCart();

    const [wine,    setWine]    = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,   setError]   = useState(null);

    const urlApi = import.meta.env.VITE_API_URL + '/wines/' + id;

    useEffect(() => {
        fetch(urlApi)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log('🔎 Detail fetched →', data);
                setWine(data.wineId);
            })
            .catch(err => {
                console.error(err);
                setError('No se pudo cargar el vino');
            })
            .finally(() => setLoading(false));
    }, [urlApi]);

    if (loading) return <div className="loader"></div>;
    if (error)   return <p className="wine-detail-error">{error}</p>;
    if (!wine || !(wine.name || wine._id)) {
        return <p className="wine-detail-error">Vino no encontrado</p>;
    }

    const { vista = '', nariz = '', boca = '' } = wine.tastingNotes || {};

    return (
        <div className="wine-detail-container">
            {wine.image && (
                <img
                    src={wine.image}
                    alt={wine.name}
                    className="wine-detail-image"
                />
            )}
            <div className="wine-detail-info">
                <h2 className="wine-detail-name">{wine.name}</h2>
                <p className="wine-detail-price">
                    €{((wine.price ?? 0)).toFixed(2)}
                </p>
                <p className="wine-detail-description">{wine.description}</p>
    
                <div className="wine-detail-tasting">
                    <h3>{t('wine.notes', 'Notas de Cata')}</h3>
                    <p><strong>{t('wine.vista', 'Vista')}: </strong>{vista}</p>
                    <p><strong>{t('wine.nariz', 'Nariz')}: </strong>{nariz}</p>
                    <p><strong>{t('wine.boca', 'Boca')}: </strong>{boca}</p>
                </div>

                <div className="wine-detail-actions">
                    <button
                        className="add-cart-button"
                        onClick={() => addToCart({
                            id: wine._id,
                            name: wine.name,
                            image: wine.image,
                            price: wine.price
                        })}
                    >
                        {t('product.addToCart', 'Agregar al carrito')}
                    </button>
                    <Link to="/shop" className="back-shop-link">
                        {t('shop.back', 'Volver a la Tienda')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

