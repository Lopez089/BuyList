import React from "react";
import "./itemArticulo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTimes, faPlusCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const iconAccordingState = (State, iconA, iconB) => {
    if (State === "buyList") {
        return <FontAwesomeIcon icon={iconA} />;
    }
    return <FontAwesomeIcon icon={iconB} />;
};

const ItemArticulo = (props) => {
    const { Product, State } = props;
    return (
        <>
            <li
                className={`list-group-item d-flex justify-content-between ${
                    State === "AllListBuyList" ? "bg-light" : ""
                }`}
            >
                <div className="mr-3 text-danger ">
                    {iconAccordingState(State, faTimes, faTrash)}
                </div>
                <div className="w-100 border-right border-left">
                    <p
                        className={`mb-0 ml-3 font-weight-light h5 
                           ${State === "AllListBuyList" ? "line-through text-muted" : ""} 
                        `}
                    >
                        {Product}
                    </p>
                </div>
                <div
                    className={`d-flex   ml-3 justify-content-end align-items-center text-primary ${
                        State === "AllListBuyList" ? "text-muted " : ""
                    }`}
                >
                    {iconAccordingState(State, faCheck, faPlusCircle)}
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
