import React from "react";
import PropTypes from "prop-types";
import ItemArticulo from "../itemArticulo/itemArticulo";

const ContentList = (props) => {
    const { titleList, articleList } = props;
    return (
        <>
            <p>{titleList}</p>
            <ul>
                {articleList.map((article, i) => {
                    return <ItemArticulo key={i} Product={article.Product} State={article.State} />;
                })}
            </ul>
        </>
    );
};
export default ContentList;

ContentList.propTypes = {
    titleList: PropTypes.string.isRequired,
    articleList: PropTypes.arrayOf(
        PropTypes.shape({
            Product: PropTypes.string.isRequired,
            State: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
