import React, { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

// Al montar, cargamos del localStorage
    useEffect(() => {
        const saved = localStorage.getItem('fc-cart');
        if (saved) setCart(JSON.parse(saved));
    }, []);

// Cada vez que cambie cart, persistimos
    useEffect(() => {
        localStorage.setItem('fc-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (wine) => {
        setCart(curr => {
            const exists = curr.find(i => i.id === wine.id);
            if (exists) {
                return curr.map(i =>
                    i.id === wine.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...curr, { ...wine, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart(curr => curr.filter(i => i.id !== id));
    };

    const clearCart = () => setCart([]);

    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, clearCart, totalCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
