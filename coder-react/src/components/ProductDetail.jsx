import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const productoData = { id: id, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 10.99 };
      setProducto(productoData);
    }, 1000); 
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <h3>{producto.nombre}</h3>
      <p>Descripción: {producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default ProductDetail;
