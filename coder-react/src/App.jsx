import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductList from './components/Products List/productList';
import Phones from './components/Categorys/phones';
import Laptops from './components/Categorys/laptops';
import Accessories from './components/Categorys/accessories';
import Clothes from './components/Categorys/clothes';
import productosData from './components/products.json';
import ProductDetail from './components/Products Details/ProductDetail';
import Error from './components/error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList productos={productosData} />} />
        <Route path="/category/laptops" element={<Laptops />} />
        <Route path="/category/phones" element={<Phones />} />
        <Route path="/category/clothes" element={<Clothes />} />
        <Route path="/category/accessories" element={<Accessories />} />
        <Route path="/product/:id" element={<ProductDetail />} /> 
        <Route path="*" component={Error} />
      </Routes>
    </Router>
  );
};

export default App;
