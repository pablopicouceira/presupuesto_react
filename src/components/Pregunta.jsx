import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = () => {
  // Definimos el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // Función que lee el presupuesto (ponemos el parseInt porque el input lee strings,
  // aunque sean type number)
  const establecerPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  // Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // Si se pasa la validación
    setError(false);
  };

  return (
    <Fragment>
      <h2>Introduce tu presupuesto</h2>
      {error ? <Error mensaje="El valor introducido es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Introduce tu presupuesto"
          onChange={establecerPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
