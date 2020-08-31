import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    const { actionAgregar } = props;
    return (
        <>
            <button className="btn btn-primary" type="button" onClick={() => actionAgregar()}>
                Agregar
            </button>
        </>
    );
};

Button.propTypes = {
    actionAgregar: PropTypes.func.isRequired,
};

export default Button;
