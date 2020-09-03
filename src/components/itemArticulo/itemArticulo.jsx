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
                    State === "AllListBuyList"
                        ? "list-group-item d-flex justify-content-between bg-light"
                        : "list-group-item d-flex justify-content-between "
                }
            >
                <div className="mr-3 text-danger ">
                    {State === "buyList" ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faTrash} />
                    )}
                </div>
                <div className="w-100 border-right border-left">
                    <p
                        className={
                            State === "AllListBuyList"
                                ? "mb-0 ml-3 font-weight-light h5 line-through text-muted"
                                : "mb-0 ml-3 font-weight-light h5 "
                        }
                    >
                        {Product}
                    </p>
                </div>
                <div
                    className={
                        State === "AllList"
                            ? "text-primary d-flex   ml-3 justify-content-end "
                            : State === "buyList"
                            ? "text-primary d-flex ml-3 justify-content-end"
                            : "text-muted d-flex ml-3 justify-content-end"
                    }
                >
                    {State === "buyList" ? (
                        <FontAwesomeIcon icon={faCheck} />
                    ) : (
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
