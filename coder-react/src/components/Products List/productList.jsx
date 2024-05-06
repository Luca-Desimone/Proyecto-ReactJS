import React from 'react';
import NavBar from '../NavBar/navbar';
import './productsList.css';

const ProductList = ({ productos }) => {
  return (
    <div className="page-container">
      <NavBar />
      <div className="product-list-container">
        <ul>
          {productos.map(producto => (
            <li key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>Descripción: {producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
