import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../ItemsDetails/itemDetail';
import ItemCount from '../ItemsDetails/itemCount';
import { fetchProducto } from '../Products List/firebaseproducts'; 
import './productDetail.css';

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [producto, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const fetchProductFromFirebase = async () => {
      try {
        const fetchedProducts = await fetchProducto(); 
        const foundProduct = fetchedProducts.find(product => product.id === id); 
        if (foundProduct) {
          setProduct(foundProduct); 
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProductFromFirebase();
  }, [id]);

  const handleAddToCart = (count) => {
    const newCartItem = {
      id: producto.id,
      name: producto.nombre,
      price: producto.precio,
      quantity: count
    };

    const updatedCartItems = [...cartItems, newCartItem];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="item-detail-container">
      <Link to="/products" className="back-button">←Volver</Link>
      {loading ? (
        <p>Cargando...</p>
      ) : producto ? (
        <div>
          <ItemDetail producto={producto} />
          <ItemCount initial={1} productId={producto.id} onAdd={handleAddToCart} /> 
        </div>
      ) : (
        <p>No se encontró el producto</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
