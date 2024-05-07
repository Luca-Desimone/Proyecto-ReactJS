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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductList productos={productosData} />} />
        <Route exact path="/category/laptops" element={<Laptops />} />
        <Route exact path="/category/phones" element={<Phones />} />
        <Route exact path="/category/clothes" element={<Clothes />} />
        <Route exact path="/category/accessories" element={<Accessories />} />
        <Route exact path="/product/:id" element={<ProductDetail />} /> 
        <Route path="*" component={Error} />
      </Routes>
    </Router>
  );
};

export default App;
