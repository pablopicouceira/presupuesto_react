import React, { Fragment } from "react";
import { controlarRemanente } from "../helpers";
import PropTypes from "prop-types";

const Control = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: {presupuesto} €</div>
      <div className={controlarRemanente(presupuesto, restante)}>
        Remanente: {restante} €
      </div>
    </Fragment>
  );
};

Control.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default Control;
