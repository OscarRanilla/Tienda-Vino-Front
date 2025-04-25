import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../Context/CartContext';
import './ProductCard.css';

export default function ProductCard({ wine }) {
    const { t } = useTranslation();
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <img src={wine.image} alt={wine.name} className="product-image" />
            <h4 className="product-name">{wine.name}</h4>
            <p className="product-price">€{wine.price.toFixed(2)}</p>
            <div className="product-card-actions">
                <Link to={`/wine/${wine._id}`} className="view-more">
                    {t('product.viewMore')}
                </Link>
                <button
                    className="add-to-cart"
                    onClick={() => addToCart({
                    id: wine._id,
                    name: wine.name,
                    image: wine.image,
                    price: wine.price
                })}
                >
                    {t('product.addToCart')}
                </button>
            </div>
        </div>
    );
}

