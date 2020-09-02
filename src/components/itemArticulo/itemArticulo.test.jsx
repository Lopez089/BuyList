/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemArticulo from "./itemArticulo";

configure({ adapter: new Adapter() });

const itemAllList = {
    Product: "Tomate",
    State: "AllList",
};

describe("type list all", () => {
    const wraper = mount(<ItemArticulo {...itemAllList} />);
    it("show the product name", () => {
        expect(wraper.find("p").text()).toEqual("Tomate");
    });
    it("show icon add product at buy list", () => {
        expect(wraper.find("div").last().childAt(0).exists(".fa-plus-circle")).toEqual(true);
    });
    it("show icon delete at all list", () => {
        expect(wraper.find("div").first().childAt(0).exists(".fa-trash")).toEqual(true);
    });
    it("no puede salir bg oscuro", () => {
        expect(wraper.exists(".bg-light")).toEqual(false);
    });
});

// Lista Todo Add list buy
// 		- aperecer texto opaco
//		- aparecer backgroum black
//		- boton add list buy disable
// probar si detecta si aparece el boton delete y los otros

// Lista buy
//		- apareber butto buy
//		- aparece button delete lista buy
