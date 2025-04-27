import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ wine, onAdd }) {
    const { t }    = useTranslation();

    return (
        <div className="product-card">
            <img src={wine.image} alt={wine.name} className="product-image" />
            <h4 className="product-name">{wine.name}</h4>
            <p className="product-price">€{wine.price.toFixed(2)}</p>
            <div className="product-card-actions">
                <Link to={`/wine/${wine._id}`} className="view-more">
                    {t('product.viewMore', 'Ver Más')}
                </Link>
                <button 
                    className="add-to-cart" 
                    onClick={onAdd}
                >
                    {t('product.addToCart', 'Añadir al carrito')}
                </button>
            </div>
        </div>
    );
}


