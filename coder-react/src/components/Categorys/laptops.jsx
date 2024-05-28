import React, { useState, useEffect } from 'react';
import ProductList from '../Products List/productList'; 
import { fetchProducto } from '../Products List/firebaseproducts'; 

const Laptops = () => {
  const [productosLaptops, setProductosLaptops] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const productosFetched = await fetchProducto();
      const laptops = productosFetched.filter(producto => producto.category === 'Laptops');
      setProductosLaptops(laptops);
    };

    getProductos();
  }, []);

  return (
    <div>
      <h2>Laptops</h2>
      <ProductList productos={productosLaptops} /> 
    </div>
  );
};

export default Laptops;
