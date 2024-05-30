import React, { useState, useEffect } from 'react';
import { db, doc, getDoc, updateDoc } from '../../firebase/firebase'; 
import "./itemCount.css";

const ItemCount = ({ initial, productId, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const productDoc = await getDoc(doc(db, 'productos', productId));
        if (productDoc.exists()) {
          setStock(productDoc.data().stock);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching stock: ", error);
      }
    };

    fetchStock();
  }, [productId]);

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

  const handleAddToCart = async () => {
    if (onAdd && count <= stock) {
      try {
        await updateDoc(doc(db, 'productos', productId), {
          stock: stock - count
        });
        setStock(stock - count);
        onAdd(count);
        console.log(`Se agregaron ${count} productos al carrito.`);
      } catch (error) {
        console.error("Error updating stock: ", error);
      }
    }
  };

  return (
    <div className="item-count">
      {stock > 0 ? (
        <>
          <button onClick={handleDecrement} className='count-button'>-</button>
          <span className="count-display">{count}</span>
          <button onClick={handleIncrement} className='count-button'>+</button>
          <button onClick={handleAddToCart} className='add-to-cart-button'>Agregar al carrito</button>
        </>
      ) : (
        <span className="out-of-stock">Sin stock</span>
      )}
    </div>
  );
};

export default ItemCount;
