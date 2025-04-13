import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import wines from '../../data/wines';
import './Shop.css';

function Shop() {
    return (
        <div className="shop-container">
            <h2 className="shop-title">Nuestra Tienda</h2>
            <div className="shop-grid">
                {wines.map((wine) => (
                    <ProductCard key={wine.id} wine={wine} />
                ))}
            </div>
        </div>
    );
}

export default Shop;

