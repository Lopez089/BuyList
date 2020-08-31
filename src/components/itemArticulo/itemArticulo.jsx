import React from "react";
import "./itemArticulo.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTrash,
//   faBookmark,
//   faTimes,
//   faCheck,
// } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const ItemArticulo = (props) => {
    console.log(props);
    const { Product, State, typeList } = props;
    return (
        <>
            <li
                className={
                    State === "State_Compra" && typeList === "Lista_Todo"
                        ? " bg-light list-group-item d-flex justify-content-between"
                        : "list-group-item d-flex justify-content-between"
                }
            >
                <div className="mr-3 text-danger ">
                    {
                        State === "State_Compra" && typeList === "Lista_compra"
                            ? // <FontAwesomeIcon icon={faTimes} />
                              null
                            : null
                        // <FontAwesomeIcon icon={faTrash} />
                    }
                </div>
                <div className="w-100 border-right border-left">
                    <p
                        className={
                            State === "State_Compra" && typeList === "Lista_Todo"
                                ? "mb-0 ml-3 font-weight-light h5 tachado"
                                : "mb-0 ml-3 font-weight-light h5"
                        }
                    >
                        {Product}
                    </p>
                </div>
                <div
                    className={
                        State === "State_Compra" && typeList === "Lista_Todo"
                            ? "text-muted d-flex  ml-3 justify-content-end "
                            : "d-flex  ml-3 justify-content-end text-primary"
                    }
                >
                    {State === "State_Compra" && typeList === "Lista_compra"
                        ? // <FontAwesomeIcon icon={faCheck} />
                          null
                        : // <FontAwesomeIcon icon={faBookmark} />
                          null}
                </div>
            </li>
        </>
    );
};

ItemArticulo.propTypes = {
    Product: PropTypes.string.isRequired,
    State: PropTypes.string.isRequired,
    typeList: PropTypes.string.isRequired,
};

export default ItemArticulo;
