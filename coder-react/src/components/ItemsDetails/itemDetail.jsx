import "./itemDetail.css";

const ItemDetail = ({ producto }) => {
  if (!producto) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail">
      <h2 className="item-name">{producto.nombre}</h2>
      <img className="item-image" src={producto.imagen} alt={producto.nombre} />
      <p className="item-description">Descripción: {producto.descripcion}</p>
      <p className="item-price">Precio: ${producto.precio}</p>
    </div>
  );
};

export default ItemDetail;
