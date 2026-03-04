import { JUEGOS } from "./data/juegos";

function App() {
  return (
    <div>
      <h1>Gaming Store</h1>

      <div>
        {JUEGOS.map((juego) => (
          <div key={juego.id}>
            <img src={juego.imagen} alt={juego.titulo} />
            <h3>{juego.titulo}</h3>
            <p>${juego.precio} MXN</p>
            <button onClick={() => alert("Añadido")}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
