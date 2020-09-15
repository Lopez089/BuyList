import React from "react";
import ContentList from "./components/ContentList/contentList";

import { ArticleList } from "./components/ContentList/contentList.stories";

function App() {
    return (
        <>
            <ContentList titleList="Buy List" typeList="buyList" articleList={ArticleList} />
            <ContentList titleList="All List" typeList="AllList" articleList={ArticleList} />
        </>
    );
}

export default App;
