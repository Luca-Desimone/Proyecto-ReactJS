import ProductList from '../Products List/productList'; 
import productosData from '../products.json'; 

const Phones = () => {
    const productosCelulares = productosData.filter(producto => producto.category === 'Phones');
    console.log(productosCelulares)
    return (
        <div>
            <h2>Celulares</h2>
            <ProductList productos={productosCelulares} /> 
        </div>
    );
};

export default Phones;
