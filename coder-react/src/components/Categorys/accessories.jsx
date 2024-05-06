import ProductList from '../Products List/productList'; 
import productosData from '../products.json'; 

const Accessories = () => {
  const productosAccesorios =  productosData.filter(producto => producto.category === 'Accessories');

  return (
    <div>
      <h2>Accesorios</h2>
      <ProductList productos={productosAccesorios} /> 
    </div>
  );
};

export default Accessories;
