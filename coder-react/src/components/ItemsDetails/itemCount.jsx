import React, { useState } from 'react';
import "./itemCount.css"
const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (onAdd) {
      onAdd(count);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement} className='boton'>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement} className='boton'>+</button>
      <button onClick={handleAddToCart} className='boton'>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
