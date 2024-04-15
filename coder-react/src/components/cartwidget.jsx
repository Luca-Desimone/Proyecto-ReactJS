import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const itemCount = 5;

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
