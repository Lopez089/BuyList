/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemArticulo from "./itemArticulo";
import { itemAllList, itemAllListBuyList, itemBuyList } from "./itemArticulo.stories";

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
    it("show button add buy list", () => {
        expect(wrapper.find("div").last().childAt(0).exists(".fa-plus-circle")).toEqual(true);
    });
});

describe("type buy list", () => {
    const wrapper = mount(<ItemArticulo {...itemBuyList} />);
    it("show button buy", () => {
        expect(wrapper.find("div").last().childAt(0).exists(".fa-check")).toEqual(true);
    });
    it("show button delete buy list", () => {
        expect(wrapper.find("div").first().childAt(0).exists(".fa-times")).toEqual(true);
    });
    it("button buy do not disabled color", () => {
        expect(wrapper.find("div").last().exists(".text-muted")).toEqual(false);
    });
    it("item list do not light", () => {
        expect(wrapper.exists(".bg-light")).toEqual(false);
    });
    it("text product do not line through", () => {
        expect(wrapper.find("p").exists(".line-through")).toEqual(false);
    });
    it("text product do not color muted", () => {
        expect(wrapper.find("p").exists(".text-muted")).toEqual(false);
    });
});
