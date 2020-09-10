/* eslint-disable import/prefer-default-export */
import React from "react";
import { storiesOf } from "@storybook/react";
import ContentList from "./contentList";

export const ArticleList = [
    {
        Product: "Tomate",
        State: "AllList",
    },
    {
        Product: "Lechuga",
        State: "AllList",
    },
    {
        Product: "Patata",
        State: "AllListBuyList",
    },
    {
        Product: "pepino",
        State: "AllListBuyList",
    },
    {
        Product: "Zanahorias",
        State: "buyList",
    },
    {
        Product: "Ajos",
        State: "buyList",
    },
];
storiesOf("Content List", module)
    .addDecorator((story) => <div style={{ padding: "3rem 15rem" }}>{story()}</div>)
    .add("All List", () => <ContentList titleList="All List" articleList={ArticleList} />)
    .add("Buy List", () => <ContentList titleList="jjjh" articleList={ArticleList} />);
