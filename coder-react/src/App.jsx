import React, { useState } from "react";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemlistcontainer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const mensaje = "¡Bienvenido a nuestro catálogo de productos!";

  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Bienvenido a nuestra tienda</h1>
      </div>
      <div className="item-list-container">
        <ItemListContainer mensaje={mensaje} />
      </div>
    </>
  );
}

export default App;
