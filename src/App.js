import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Control from "./components/Control";

function App() {
  // definimos el state para el presupuesto inicial y para el restante (al principio sus valores son iguales)

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [preguntavisible, setPreguntavisible] = useState(true);
  const [gastos, setGastos] = useState([]);

  // Cuando agregamos un nuevo gasto

  const agregarNuevoGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

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
                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
              </div>

              <div className="one-half column">
                <Listado gastos={gastos} />
                <Control presupuesto={presupuesto} restante={restante} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
