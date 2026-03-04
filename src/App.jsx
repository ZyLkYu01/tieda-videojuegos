import { JUEGOS } from "./data/juegos";
import "./App.css";

function App() {
  return (
    <div className="tienda-contenedor">
      <h1>🎮 Mi Tienda de Videojuegos</h1>

      <div className="lista-juegos">
        {JUEGOS.map((juego) => (
          <div key={juego.id} className="tarjeta">
            <img
              src={juego.imagen}
              alt={juego.titulo}
              style={{ width: "200px" }}
            />
            <h3>{juego.titulo}</h3>
            <p>${juego.precio} MXN</p>
            <button onClick={() => alert("¡Agregado!")}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
