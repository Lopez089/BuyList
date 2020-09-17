import React, { useState, createContext } from "react";
import ArticleList from "../components/ContentList/contentList.stories";

const AppContext = createContext({});

const ContextProductListProvide = (props) => {
    const { children } = props;
    const [product, setproduct] = useState(ArticleList);

    return (
        <>
            <AppContext.Provider value={product}>{children}</AppContext.Provider>
        </>
    );
};
