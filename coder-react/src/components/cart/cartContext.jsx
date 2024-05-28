import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []); 

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      console.log(updatedCartItems)
    } else {
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};


