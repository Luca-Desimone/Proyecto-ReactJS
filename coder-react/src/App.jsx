// En tu componente de enrutamiento (por ejemplo, App.jsx)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductList from './components/Products List/productList';
import Phones from './components/Categorys/phones';
import Laptops from './components/Categorys/laptops';
import Accessories from './components/Categorys/accessories';
import Clothes from './components/Categorys/clothes';
import productosData from './components/products.json';

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
      </Routes>
    </Router>
  );
};

export default App;
