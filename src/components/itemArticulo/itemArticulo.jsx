import React from "react";
import "./itemArticulo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTimes, faPlusCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const ItemArticulo = (props) => {
    // console.log(props);
    const { Product, State } = props;
    return (
        <>
            <li
                className={
                    State === "AllList"
                        ? "list-group-item d-flex justify-content-between"
                        : "list-group-item d-flex justify-content-between bg-light"
                }
            >
                <div className="mr-3 text-danger ">
                    {State === "State_Compra" ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faTrash} />
                    )}
                </div>
                <div className="w-100 border-right border-left">
                    <p
                        className={
                            State === "AllList"
                                ? "mb-0 ml-3 font-weight-light h5"
                                : "mb-0 ml-3 font-weight-light h5 line-through text-muted"
                        }
                    >
                        {Product}
                    </p>
                </div>
                <div
                    className={
                        State === "AllList"
                            ? "text-primary d-flex   ml-3 justify-content-end "
                            : "d-flex ml-3 justify-content-end text-muted"
                    }
                >
                    {State === "State_Compra" ? null : ( // <FontAwesomeIcon icon={faCheck} />
                        <FontAwesomeIcon icon={faPlusCircle} />
                    )}
                </div>
            </li>
        </>
    );
};

ItemArticulo.propTypes = {
    Product: PropTypes.string.isRequired,
    State: PropTypes.string.isRequired,
};

export default ItemArticulo;
