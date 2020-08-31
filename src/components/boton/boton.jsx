import React from "react";
import PropTypes from "prop-types";

const Boton = (props) => {
    const { disabled, actionAgregar } = props;
    return (
        <>
            <button
                className={disabled === "true" ? "not-allowed btn btn-primary" : "btn btn-primary"}
                type="submit"
                disabled={disabled === "true"}
                onClick={() => actionAgregar()}
            >
                Agregar
            </button>
        </>
    );
};

Boton.propTypes = {
    disabled: PropTypes.string.isRequired,
    actionAgregar: PropTypes.func.isRequired,
};

export default Boton;
