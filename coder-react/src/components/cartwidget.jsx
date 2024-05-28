import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <Link to="/carrito">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </Link>
    </div>
  );
};

export default CartWidget;
