import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Boton from "./boton.jsx";

const actionAgregar = action("Agregar Producto");

storiesOf("Boton", module)
    .addDecorator((story) => <div style={{ padding: "3rem" }}>{story()}</div>)
    .add("Activo", () => <Boton actionAgregar={actionAgregar} disabled="false" />)
    .add("Desativado", () => <Boton actionAgregar={actionAgregar} disabled="true" />);
