import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);

  // Cuando el usuario añade un gasto
  const añadirGasto = (e) => {
    e.preventDefault();

    // Validar

    // Construir el gasto (va a ser un objeto)

    // Pasar el gasto al componente principal

    // Resetear el form
  };

  return (
    <form onSubmit={añadirGasto}>
      <h2>Introduce aquí tus gastos</h2>
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
          type="text"
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

export default Formulario;
