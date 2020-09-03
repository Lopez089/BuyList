/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemArticulo from "./itemArticulo";
import { itemAllList, itemAllListBuyList } from "./itemArticulo.stories";

configure({ adapter: new Adapter() });

describe("type all list", () => {
    const wrapper = mount(<ItemArticulo {...itemAllList} />);
    it("show the product name", () => {
        expect(wrapper.find("p").text()).toEqual("Tomate");
    });
    it("do not show text line through", () => {
        expect(wrapper.find("p").exists(".line-through")).toEqual(false);
    });
    it("do not show text line through", () => {
        expect(wrapper.find("p").exists(".line-through")).toEqual(false);
    });
    it("show icon add product at buy list", () => {
        expect(wrapper.find("div").last().childAt(0).exists(".fa-plus-circle")).toEqual(true);
    });
    it("show icon delete at all list", () => {
        expect(wrapper.find("div").first().childAt(0).exists(".fa-trash")).toEqual(true);
    });
    it("do not can have bg light", () => {
        expect(wrapper.exists(".bg-light")).toEqual(false);
    });
    it("button add buy list do not disable color", () => {
        expect(wrapper.find("div").last().exists(".text-muted")).toEqual(false);
    });
});

describe("type all list buy list ", () => {
    const wrapper = mount(<ItemArticulo {...itemAllListBuyList} />);
    it("show text line through", () => {
        expect(wrapper.find("p").exists(".line-through")).toEqual(true);
    });
    it("show text opaque", () => {
        expect(wrapper.find("p").exists(".text-muted")).toEqual(true);
    });
    it("show bg light", () => {
        expect(wrapper.exists(".bg-light")).toEqual(true);
    });
    it("button add buy list disable color", () => {
        expect(wrapper.find("div").last().exists(".text-muted")).toEqual(true);
    });
});
// Lista buy
//		- apareber butto buy
//		- aparece button delete lista buy
//		- iconos no nuted
// 		- list item no opaca
//		- text no subrayado
// 		- texx no mutad

describe("type buy list", () => {
    it("show button buy", () => {});
    it("show button delete buy list", () => {});
    it("button buy do not disabled color", () => {});
    it("item list do not light", () => {});
    it("text product do not line through", () => {});
    it("text product do not color muted", () => {});
});
