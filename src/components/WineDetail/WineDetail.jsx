import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import wines from '../../data/wines';
import './WineDetail.css';

function WineDetail() {
    const { id } = useParams();
    const { t } = useTranslation();

    const wine = wines.find((w) => w.id === Number(id));
    if (!wine) {
        return <div className="wine-not-found">Vino no encontrado.</div>;
    }
    
    const { vista, nariz, boca } = wine.tastingNotes || {};
    
    return (
        <div className="wine-detail-container">
            <img src={wine.image} alt={wine.name} className="wine-detail-image" />
            <div className="wine-detail-info">
                <h2 className="wine-detail-name">{wine.name}</h2>
                <p className="wine-detail-price">€{wine.price.toFixed(2)}</p>
                <p className="wine-detail-description">{wine.description}</p>
    
                <div className="wine-detail-tasting">
                    <h3>Notas de Cata</h3>
                    <p><strong>Vista:</strong> {vista}</p>
                    <p><strong>Nariz:</strong> {nariz}</p>
                    <p><strong>Boca:</strong> {boca}</p>
                </div>
    
                <div className="wine-detail-actions">
                    <button className="add-cart-button">Añadir al carrito</button>
                    <Link to="/shop" className="back-shop-link">
                        Volver a la Tienda
                    </Link>
                </div>
            </div>
        </div>
    );
}
    
    export default WineDetail;
