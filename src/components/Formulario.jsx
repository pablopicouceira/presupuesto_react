import React, { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Error from "./Error";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState(false);

  // Cuando el usuario añade un gasto
  const añadirGasto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // Construir el gasto (va a ser un objeto)
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    // Pasar el gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);

    // Resetear el form
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={añadirGasto}>
      <h2>Introduce aquí tus gastos</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label>Tipo de gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej: supermercado"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Importe</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej: 100€"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="añadir gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
