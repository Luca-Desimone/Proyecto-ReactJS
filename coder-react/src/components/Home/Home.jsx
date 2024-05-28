import NavBar from '../NavBar/navbar';
import ItemListContainer from '../itemlistcontainer/itemlistcontainer';
import "./Home.css"
const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="content">
        <h2>Bienvenido a nuestra tienda en línea</h2>
        <p>Explora nuestro catálogo de productos y encuentra las mejores ofertas.</p>    
        <ItemListContainer />
      </div>
    </div>
  );
};


export default Home;
