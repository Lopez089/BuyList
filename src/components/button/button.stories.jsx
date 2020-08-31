import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./button.jsx";

const actionAgregar = action("Form Add Product");

storiesOf("Boton", module)
    .addDecorator((story) => <div style={{ padding: "3rem" }}>{story()}</div>)
    .add("Defaul", () => <Button actionAgregar={actionAgregar} />);

// export default actionAgregar;
