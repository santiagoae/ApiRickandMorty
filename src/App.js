import "./styles/App.css";
import Nav from "./components/Nav";
import Personajes from "./components/Resultados";

function App() {  

  return (
    <div>
      <section id="head">
        <Nav />
      </section>
      <section id="resultado">
        <Personajes />
      </section>
    </div>
  );
}

export default App;
