
const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.nombre}</h2>
      <p>Descripción: {product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
    </div>
  );
};

export default ItemDetail;
