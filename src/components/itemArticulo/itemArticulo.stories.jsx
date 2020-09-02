import React from "react";
import { storiesOf } from "@storybook/react";
import ItemArticulo from "./itemArticulo";

const itemCompraTodo = {
    Product: "Tomate",
    State: "AllList",
};

const itemTodo = {
    Product: "Patata",
    State: "State_Todo",
};

const itemCompraCompra = {
    Product: "Patata",
    State: "State_Compra",
};

storiesOf("Item Articulos", module)
    .addDecorator((story) => <div style={{ padding: "3rem 15rem" }}>{story()}</div>)
    .add("All list", () => <ItemArticulo {...itemTodo} />)
    .add("Lista Compra", () => <ItemArticulo {...itemCompraCompra} />)
    .add("Lista Todo Compra", () => <ItemArticulo {...itemCompraTodo} />);
