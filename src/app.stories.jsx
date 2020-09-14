import React from "react";
import { storiesOf } from "@storybook/react";
import App from "./App";

storiesOf("App", module)
    .addDecorator((story) => <div style={{ padding: "3rem 15rem" }}>{story()}</div>)
    .add("app", () => <App />);
