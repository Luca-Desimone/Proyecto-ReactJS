import ProductList from '../Products List/productList'; 
import productosData from '../products.json'; 

const Laptops = () => {

  const productosLaptops =  productosData.filter(producto => producto.category === 'Laptops');
  return (
    <div>
      <h2>Laptops</h2>
      <ProductList productos={productosLaptops} /> 
    </div>
  );
};

export default Laptops;
