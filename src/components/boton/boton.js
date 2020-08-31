import React from "react";
import PropTypes from "prop-types";

const Boton = props => {
  console.log(props);
  const { disabled, actionAgregar } = props;
  return (
    <React.Fragment>
      <button
        className={
          disabled === "true"
            ? "not-allowed btn btn-primary"
            : "btn btn-primary"
        }
        type="submit"
        disabled={disabled === "true" ? true : false}
        onClick={() => actionAgregar()}
      >
        Agregar
      </button>
    </React.Fragment>
  );
};

Boton.propTypes = {
  disabled: PropTypes.string.isRequired,
  actionAgregar: PropTypes.func.isRequired
};

export default Boton;
