import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemsDetails/itemDetail';
import ItemCount from '../ItemsDetails/itemCount';
import productosData from '../products.json';
import './productDetail.css';

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = productosData.find(producto => producto.id === parseInt(id));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="item-detail-container">
      {product ? (
        <div>
          <ItemDetail product={product} />
          <ItemCount initial={1} stock={10} /> 
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
