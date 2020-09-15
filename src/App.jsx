import React from "react";
import ContentList from "./components/ContentList/contentList";

import { ArticleList } from "./components/ContentList/contentList.stories";

function App() {
    return (
        <>
            <ContentList titleList="Lista Compra" typeList="BuyList" articleList={ArticleList} />
            <ContentList titleList="Lista Todo" typeList="AllList" articleList={ArticleList} />
        </>
    );
}

export default App;
