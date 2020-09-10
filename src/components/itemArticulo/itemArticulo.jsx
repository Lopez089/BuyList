import React from "react";
import "./itemArticulo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTimes, faPlusCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const iconAccordingState = (typeList, State, iconA, iconB) => {
    if (typeList === "BuyList" && State === "buyList") {
        return <FontAwesomeIcon icon={iconA} />;
    }
    return <FontAwesomeIcon icon={iconB} />;
};

const ItemArticulo = (props) => {
    const { typeList, Product, State } = props;
    return (
        <>
            <li
                className={`list-group-item d-flex justify-content-between ${
                    State === "buyList" && typeList === "AllList" ? "bg-light" : ""
                }`}
            >
                <div className="mr-3 text-danger ">
                    {iconAccordingState(typeList, State, faTimes, faTrash)}
                </div>
                <div className="w-100 border-right border-left">
                    <p
                        className={`mb-0 ml-3 font-weight-light h5 
                           ${
                               State === "buyList" && typeList === "AllList"
                                   ? "line-through text-muted"
                                   : ""
                           } 
                        `}
                    >
                        {Product}
                    </p>
                </div>
                <div
                    className={`d-flex   ml-3 justify-content-end align-items-center text-primary ${
                        State === "buyList" && typeList === "AllList" ? "text-muted " : ""
                    }`}
                >
                    {iconAccordingState(typeList, State, faCheck, faPlusCircle)}
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
