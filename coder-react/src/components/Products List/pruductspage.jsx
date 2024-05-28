import React, { useState, useEffect } from 'react';
import ProductList from './productList';
import { fetchProducto } from './firebaseproducts';

const ProductsPage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const productosFetched = await fetchProducto();
      setProductos(productosFetched);
    };

    getProductos();
  }, []);

  return (
    <div>
      <ProductList productos={productos} />
    </div>
  );
};

export default ProductsPage;
