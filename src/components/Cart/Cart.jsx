import React from 'react';
import { useCart } from '../../Context/CartContext';
import './Cart.css';

export default function Cart() {
    const { cart, removeFromCart, totalCount } = useCart();
    const total = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);

    return (
        <div className="cart-container">
            <h2 className="cart-title">Carrito de Compras ({totalCount})</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-price">
                                        {(item.price * item.quantity).toFixed(2)} €
                                    </span>
                                </div>
                                <div className="cart-item-qty">Cant: {item.quantity}</div>
                                <button
                                    className="cart-remove"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    ✕
                                </button>
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

