import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";

function App() {
  // definimos el state para el presupuesto inicial y para el restante (al principio sus valores son iguales)

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [preguntavisible, setPreguntavisible] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>;
        <div className="contenido-principal contenido">
          {preguntavisible ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPreguntavisible={setPreguntavisible}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario />
              </div>

              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
