/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ContentList from "./contentList";
import { ArticleList } from "./contentList.stories";

configure({ adapter: new Adapter() });

// All list
//	--	tien un titulo que dice 'Lista Todo'
//	--	aparecen todos los elementos
//	--	no aparecen lo elemento que estan en buy con las carcteristicas de buy
// 		al final aparecen los elentos que estan en la lista buy list

describe("All list", () => {
    const wrapper = mount(<ContentList titleList="All List" articleList={ArticleList} />);
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
    it("", () => {});
    it("", () => {});
});
// Buy list
//		tien un titulo que dice 'Lista compra'
//		solo aparecen los elemento que etan en la lista buy
//		tiene que aparecer todos los elementos pero que tien el estado de list buy
