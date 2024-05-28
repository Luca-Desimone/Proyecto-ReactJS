import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/cart/cartContext';
import Home from './components/Home/Home';
import ProductsPage from './components/Products List/pruductspage';
import Phones from './components/Categorys/phones';
import Laptops from './components/Categorys/laptops';
import Accessories from './components/Categorys/accessories';
import Clothes from './components/Categorys/clothes';
import ProductDetail from './components/Products Details/ProductDetail';
import Error from './components/error';
import CartPage from './components/cart/cart';


const App = () => {
  return (
    <Router>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/category/laptops" element={<Laptops />} />
        <Route path="/category/phones" element={<Phones />} />
        <Route path="/category/clothes" element={<Clothes />} />
        <Route path="/category/accessories" element={<Accessories />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
