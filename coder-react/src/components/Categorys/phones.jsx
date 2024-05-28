import React, { useState, useEffect } from 'react';
import ProductList from '../Products List/productList'; 
import { fetchProducto } from '../Products List/firebaseproducts'; 

const Phones = () => {
  const [productosCelulares, setProductosCelulares] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const productosFetched = await fetchProducto();
      const phones = productosFetched.filter(producto => producto.category === 'Phones');
      setProductosCelulares(phones);
    };

    getProductos();
  }, []);

  return (
    <div>
      <h2>Celulares</h2>
      <ProductList productos={productosCelulares} /> 
    </div>
  );
};

export default Phones;
