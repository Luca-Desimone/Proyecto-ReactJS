import ProductList from '../Products List/productList'; 
import productosData from '../products.json'; 

const Clothes = () => {
  const productosRopa =  productosData.filter(producto => producto.category === 'Clothes');
  return (
    <div>
      <h2>Ropa</h2>
      <ProductList productos={productosRopa} />
    </div>
  );
};

export default Clothes;
