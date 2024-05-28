import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './cart.css'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = () => {
    Swal.fire({
      title: "¡Gracias Por Su Compra!",
      text: "Esperamos que la disfrute",
      icon: "success"
    });
    localStorage.removeItem('cartItems');
    setCartItems([]);
    navigate('/');
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name} - ${item.price} x {item.quantity}</p>
            </div>
          ))}
          <h3>Total: ${getTotalPrice()}</h3>
          <button onClick={handlePurchase} className="purchase-button">Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;