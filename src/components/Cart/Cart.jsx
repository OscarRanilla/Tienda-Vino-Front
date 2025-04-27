import React from 'react';
import { useCart } from '../../Context/CartContext';
import { useToast } from '@chakra-ui/react';
import './Cart.css';

export default function Cart() {
    const { cart, removeFromCart, clearCart, totalCount } = useCart();
    const total = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
    const toast = useToast();

    const handleCheckout = async () => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/checkout-test`,
                {
                    method:      'POST',
                    credentials: 'include',
                    headers:     { 'Content-Type': 'application/json' },
                    body:        JSON.stringify({ cart })
                }
            );
            const data = await res.json();
            if (data.success) {
                toast({
                    title: 'Compra simulada 🎉',
                    description: 'Hemos enviado un email de prueba',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                clearCart();
            }   else {
                toast({
                    title: 'Error en simulación',
                    description: data.message || 'Inténtalo de nuevo',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        }   catch (err) {
            console.error(err);
            toast({
                title: 'Error conectando con servidor',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

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
                    <button
                        className="cart-checkout-button"
                        onClick={handleCheckout}
                    >
                        Finalizar Compra
                    </button>
                </>
            )}
        </div>
    );
}

