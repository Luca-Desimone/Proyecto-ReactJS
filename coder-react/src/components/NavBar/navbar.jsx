import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from '../cart/cartwidget';
import './navbar.css';
import logo from '../images/Logo.jpeg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo de la tienda" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/products">Todos los productos</Link>
        </li>
        <li>
          <Link to="/category/laptops">Laptops</Link>
        </li>
        <li>
          <Link to="/category/phones">Celulares</Link>
        </li>
        <li>
          <Link to="/category/clothes">Ropa</Link>
        </li>
        <li>
        <Link to="/category/accessories">Accesorios</Link>
        </li>
      </ul>
      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
