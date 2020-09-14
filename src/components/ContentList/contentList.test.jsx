/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ContentList from "./contentList";
import { ArticleList } from "./contentList.stories";

configure({ adapter: new Adapter() });
describe("All list", () => {
    const wrapper = mount(
        <ContentList typeList="AllList" titleList="All List" articleList={ArticleList} />,
    );
    it("have a title 'All list'", () => {
        expect(wrapper.find("p").at(0).text()).toEqual("All List");
    });
    it("Render all the elements of my array", () => {
        const ArticleSize = ArticleList.length;
        expect(wrapper.find("ul").children()).toHaveLength(ArticleSize);
    });
    it("The elements that are in buyList do not appear with the state AllListBuyList", () => {
        // nungun elemnto de la lista puede tener fa-times
        const nodos = wrapper.find("svg").map((nodo) => nodo.exists(".fa-times"));
        expect(nodos).not.toContain(true);
    });
    it("at the end appear the items that are in the buy list", () => {
        const lengthFilterArticleBuyList = ArticleList.filter(
            (article) => article.State === "buyList",
        ).length;
        const lengthArticles = ArticleList.length;
        console.log(lengthArticles - lengthFilterArticleBuyList);
        // comprobar si mis X ultimos productos tiene el icono que tien que tener
        const lastArticleList = wrapper
            .find("li")
            .slice(lengthArticles - lengthFilterArticleBuyList, lengthArticles);
        const nodos = lastArticleList.map((nodo) => nodo.exists(".bg-light"));
        console.log(nodos);
        expect(nodos).not.toContain(false);
    });
});
// Buy list
//		tien un titulo que dice 'Lista compra'
//		solo aparecen los elemento que etan en la lista buy
//		tiene que aparecer todos los elementos pero que tien el estado de list buy
