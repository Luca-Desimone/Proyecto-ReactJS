import React, { useState, useEffect } from 'react';
import "./itemlistcontainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const productosData = [
        { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 10.99 },
        { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 20.49 },
      ];
      setProductos(productosData);
    }, 1000); 
  }, []);

  return (
    <div className="homepage">
      <header className="header">
        <h1>Bienvenido a GameTech Store</h1>
        <p>Tu destino para todo lo relacionado con el gaming y la tecnología</p>
      </header>
      <section className="highlights">
        <div className="highlight">
          <h2>Tecnología de punta</h2>
          <p>Encuentra los últimos gadgets y dispositivos que mejorarán tu experiencia de juego. Desde las tarjetas gráficas más potentes hasta los procesadores más rápidos, tenemos todo lo que necesitas para llevar tu juego al siguiente nivel.</p>
        </div>
        <div className="highlight">
          <h2>Vestimenta gamer</h2>
          <p>Viste como un verdadero gamer con nuestra exclusiva línea de ropa y accesorios. Desde camisetas con diseños épicos hasta sudaderas y gorras, muestra tu pasión por los videojuegos con estilo.</p>
        </div>
      </section>
      <section className="products">
        <h2>Productos destacados</h2>
        <div className="product-category">
          <h3>Tecnología</h3>
          <ul>
            <li>PCs y Laptops Gaming: Equipos de alto rendimiento con la mejor calidad gráfica.</li>
            <li>Periféricos: Ratones, teclados mecánicos, auriculares y más.</li>
            <li>Componentes: Tarjetas gráficas, procesadores, memorias RAM, y más.</li>
          </ul>
        </div>
        <div className="product-category">
          <h3>Vestimenta</h3>
          <ul>
            <li>Camisetas: Diseños exclusivos inspirados en tus juegos favoritos.</li>
            <li>Sudaderas y Hoodies: Confort y estilo para largas sesiones de juego.</li>
            <li>Accesorios: Gorras, mochilas, y más, todo con temática gamer.</li>
          </ul>
        </div>
      </section>
      <section className="offers">
        <h2>Ofertas exclusivas</h2>
        <p>¡No te pierdas nuestras promociones y descuentos especiales! Mantente al tanto de nuestras ofertas diarias y equipa tu set-up gamer al mejor precio.</p>
      </section>
      <section className="community">
        <h2>Únete a la comunidad</h2>
        <p>Sigue nuestras redes sociales y participa en nuestros eventos y torneos. Sé parte de la comunidad gamer más apasionada y comparte tu experiencia con otros jugadores.</p>
      </section>
      <footer className="footer">
        <h2>¿Listo para empezar?</h2>
        <p>Descubre lo mejor en tecnología y vestimenta gamer en GameTech Store. ¡Tu próximo nivel de juego te espera!</p>
      </footer>
    </div>
  );
};

export default ItemListContainer;
