import React from 'react';
import NavBar from '../NavBar/navbar';
import './productsList.css';
import { Link } from "react-router-dom";
const ProductList = ({ productos }) => {
  return (
    <div className="product-list-container">
      <NavBar />
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Descripción: {producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <Link to={`/product/${producto.id}`}>
              <button class="beautiful-button">Ver detalles</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};;

export default ProductList;
