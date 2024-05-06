import React, { useState, useEffect } from 'react';
import ProductList from './Products List/productList';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const productosData = [
        { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 10.99 },
        { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 20.49 },
      ];
      setProductos(productosData);
    }, 1000); 
  }, []);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ProductList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
