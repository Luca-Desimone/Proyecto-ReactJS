import { BiCart } from 'react-icons/bi'; 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <BiCart size={24} /> 
      <span className="item-count">1</span>
    </div>
  );
};

export default CartWidget;
