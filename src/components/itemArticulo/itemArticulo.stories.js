import React from "react";
import { storiesOf } from "@storybook/react";
import ItemArticulo from "./itemArticulo";

const itemCompraTodo = {
  Product: "Tomate",
  State: "State_Compra",
  type_list: "Lista_Todo"
};

const itemTodo = {
  Product: "Patata",
  State: "State_Todo",
  type_list: "Lista_Todo"
};

const itemCompraCompra = {
  Product: "Patata",
  State: "State_Compra",
  type_list: "Lista_compra"
};

storiesOf("Item Articulos", module)
  .addDecorator(story => <div style={{ padding: "3rem 15rem" }}>{story()}</div>)
  .add("default", () => <ItemArticulo {...itemTodo} />)
  .add("Lista Todo", () => <ItemArticulo {...itemTodo} />)
  .add("Lista Compra", () => <ItemArticulo {...itemCompraCompra} />)
  .add("Lista Todo Compra", () => <ItemArticulo {...itemCompraTodo} />);
