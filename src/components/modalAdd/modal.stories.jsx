import React from "react";
import { storiesOf } from "@storybook/react";
import ModalAdd from "./modal";

storiesOf("Modal Add Product", module)
    .addDecorator((story) => <div style={{ padding: "3rem 15rem" }}>{story()}</div>)
    .add("modal add", () => <ModalAdd />);
