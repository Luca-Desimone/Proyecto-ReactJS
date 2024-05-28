import React, { useState } from 'react';
import "./itemCount.css";

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
      console.log(`Se agregaron ${count} productos al carrito.`);
    }
  };

  return (
    <div className="item-count">
      <button onClick={handleDecrement} className='count-button'>-</button>
      <span className="count-display">{count}</span>
      <button onClick={handleIncrement} className='count-button'>+</button>
      <button onClick={handleAddToCart} className='add-to-cart-button'>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
