import React from "react";
import PropTypes from "prop-types";
import ItemArticulo from "../itemArticulo/itemArticulo";

const ContentList = (props) => {
    const { titleList, articleList, typeList } = props;

    const sortList = articleList.sort((a, b) => {
        if (a.State > b.State) {
            return 1;
        }
        return -1;
    });

    /// logica buy list ///
    const BuyListFilter = () => {
        if (typeList === "BuyList") {
            return articleList.filter((product) => product.State === "buyList");
        }
        return sortList;
    };
    /// //////////
    return (
        <>
            <p className="text-center h5 m-4">{titleList}</p>
            <ul>
                {BuyListFilter().map((article, i) => {
                    return (
                        <ItemArticulo
                            key={i}
                            typeList={typeList}
                            Product={article.Product}
                            State={article.State}
                        />
                    );
                })}
            </ul>
        </>
    );
};
export default ContentList;

ContentList.propTypes = {
    titleList: PropTypes.string.isRequired,
    typeList: PropTypes.string.isRequired,
    articleList: PropTypes.arrayOf(
        PropTypes.shape({
            Product: PropTypes.string.isRequired,
            State: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
