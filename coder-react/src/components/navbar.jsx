import React from 'react';
import CartWidget from './cartwidget';
import './navbar.css';
import logo from './images/Logo.jpeg'; 
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
      <img src={logo} alt="Logo de la tienda" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
