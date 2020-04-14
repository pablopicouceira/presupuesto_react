import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Control from "./components/Control";

function App() {
  // definimos el state para el presupuesto inicial y para el restante (al principio sus valores son iguales)

  let gastosIniciales = JSON.parse(localStorage.getItem("gastos"));
  if (!gastosIniciales) {
    gastosIniciales = [];
  }
  let presupuestoInicial = JSON.parse(localStorage.getItem("presupuesto"));
  let restanteInicial = JSON.parse(localStorage.getItem("restante"));

  let cantidades = [];
  gastosIniciales.forEach((gasto, index) => cantidades.push(gasto.cantidad));
  let total = presupuestoInicial - cantidades.reduce((a, b) => a + b, 0);

  console.log(restanteInicial);

  const [presupuesto, setPresupuesto] = useState(presupuestoInicial);
  const [restante, setRestante] = useState(total);
  const [preguntavisible, setPreguntavisible] = useState(true);
  const [gastos, setGastos] = useState(gastosIniciales);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false);

  /*const total = gastos.map((gasto) => {
    let valor = valor + gasto.cantidad;
  });*/

  console.log(gastos);
  console.log(cantidades);
  console.log(total);

  // useEffect que actualiza el remanente

  localStorage.setItem("restante", JSON.stringify(restante));
  useEffect(() => {
    if (creargasto) {
      // Agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);

      // Resta del presupuesto actual
      const remanente = restante - gasto.cantidad;
      setRestante(remanente);
    }
    // Resetear a false
    // setCrearGasto(false) (creo que no hace falta)
  }, [gasto, presupuesto]);
  localStorage.setItem("gastos", JSON.stringify(gastos));

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>;
        <div className="contenido-principal contenido">
          {/*Si no queremos tener que actualizar el contenido quitamos la pregunta visible */}
          {preguntavisible ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPreguntavisible={setPreguntavisible}
              presupuestoInicial={presupuestoInicial}
              total={total}
              setGastos={setGastos}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
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
