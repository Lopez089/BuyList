/* eslint-disable no-undef */
import React from "react";
import { configure, shallow, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemArticulo from "./itemArticulo";

configure({ adapter: new Adapter() });

const itemCompraTodo = {
    Product: "Tomate",
    State: "State_Compra",
    type_list: "Lista_Todo",
};

// eslint-disable-next-line react/jsx-props-no-spreading
const wraper = shallow(<ItemArticulo {...itemCompraTodo} />);

describe("type list all", () => {
    it("show the product name", () => {
        expect(wraper.find("p").text()).toEqual("Tomate");
    });
    it("show icon add product at buy list", () => {});
    it("show icon delete at all list", () => {});
});

// Lista Todo Add list buy
// 		- aperecer texto opaco
//		- aparecer backgroum black
//		- boton add list buy disable
// probar si detecta si aparece el boton delete y los otros

// Lista buy
//		- apareber butto buy
//		- aparece button delete lista buy
