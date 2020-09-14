import React from "react";
import PropTypes from "prop-types";
import ItemArticulo from "../itemArticulo/itemArticulo";

const ContentList = (props) => {
    const { titleList, articleList, typeList } = props;

    const sortList = articleList.sort((articleCurrent, articleNext) => {
        console.log(articleCurrent.State);
        return articleCurrent.State - articleNext.State;
    });
    console.table(sortList);
    return (
        <>
            <p>{titleList}</p>
            <ul>
                {sortList.map((article, i) => {
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
