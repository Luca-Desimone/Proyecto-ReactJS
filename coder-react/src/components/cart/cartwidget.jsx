import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/cartContext'; 
import './cartwidget.css'; 

const CartWidget = () => {
  const { getItemCount } = useCart(); 

  useEffect(() => {
  }, [getItemCount]);

  return (
    <div className="cart-widget">
      <Link to="/carrito">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" className='carro' />
        <span className="item-counte">{getItemCount()}</span> 
      </Link>
    </div>
  );
};

export default CartWidget;
