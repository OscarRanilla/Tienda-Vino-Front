// /src/components/Cart/Cart.jsx
import React, { useState } from 'react';
import './Cart.css';

function Cart() {
    const [items, setItems] = useState([]);

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Carrito de Compras</h2>
            {items.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {items.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-price">{(item.price * item.quantity).toFixed(2)} €</span>
                                </div>
                                <div className="cart-item-qty">Cant: {item.quantity}</div>
                                <button className="cart-remove" onClick={() => removeItem(item.id)}>X</button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <span>Total:</span>
                        <strong>{total.toFixed(2)} €</strong>
                    </div>
                    <button className="cart-checkout-button">Finalizar Compra</button>
                </>
            )}
        </div>
    );
}

export default Cart;
