import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase'; 
import './cart.css'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [purchaseId, setPurchaseId] = useState(null); 
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

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const handlePurchase = async () => {
    if (!email || !password) {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos",
        icon: "error"
      });
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "compras"), {
        items: cartItems,
        total: getTotalPrice(),
        email: email,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      
      setPurchaseId(docRef.id);

      Swal.fire({
        title: "¡Gracias Por Su Compra!",
        text: `Su ID de compra es: ${docRef.id}. Esperamos que la disfrute`,
        icon: "success"
      });

      localStorage.removeItem('cartItems');
      setCartItems([]);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (e) {
      console.error("Error adding document: ", e);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al procesar su compra. Intente nuevamente.",
        icon: "error"
      });
    }
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <div className="user-details">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - ${item.price} x {item.quantity}</p>
              <button onClick={() => handleRemoveItem(index)} className="remove-button">Eliminar</button>
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
