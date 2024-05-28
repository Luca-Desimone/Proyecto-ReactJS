import React, { useState, useEffect } from 'react';
import ProductList from '../Products List/productList'; 
import { fetchProducto } from '../Products List/firebaseproducts'; 

const Accessories = () => {
  const [productosAccesorios, setProductosAccesorios] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const productosFetched = await fetchProducto();
        const accesorios = productosFetched.filter(producto => producto.category === 'Accessories');
        setProductosAccesorios(accesorios);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProductos();
  }, []);

  return (
    <div>
      <h2>Accesorios</h2>
      <ProductList productos={productosAccesorios} /> 
    </div>
  );
};

export default Accessories;
