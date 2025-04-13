import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ProductCard.css';

const ProductCard = ({ wine }) => {
    const { t } = useTranslation();

    return (
        <div className="product-card">
            <img src={wine.image} alt={wine.name} className="product-image" />
            <h4 className="product-name">{wine.name}</h4>
            <p className="product-price">€{wine.price}</p>
            <div className="product-card-actions">
                <Link to={`/wine/${wine.id}`} className="view-more">
                    {t('product.viewMore')}
                </Link>
                <button className="add-to-cart" onClick={() => {/* TODO: agregar al carrito */}}>
                    {t('product.addToCart')}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
