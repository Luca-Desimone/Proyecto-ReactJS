import React, { useState, useEffect } from 'react';
import ProductList from '../Products List/productList'; 
import { fetchProducto } from '../Products List/firebaseproducts'; 

const Clothes = () => {
  const [productosRopa, setProductosRopa] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const productosFetched = await fetchProducto();
        const ropa = productosFetched.filter(producto => producto.category === 'Clothes');
        setProductosRopa(ropa);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProductos();
  }, []);

  return (
    <div>
      <h2>Ropa</h2>
      <ProductList productos={productosRopa} /> 
    </div>
  );
};

export default Clothes;
