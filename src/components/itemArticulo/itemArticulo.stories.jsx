import React from "react";
import { storiesOf } from "@storybook/react";
import ItemArticulo from "./itemArticulo";

export const itemAllList = {
    Product: "Tomate",
    State: "AllList",
};

export const itemAllListBuyList = {
    Product: "Patata",
    State: "AllListBuyList",
};

export const itemBuyList = {
    Product: "Zanahorias",
    State: "buyList",
};

storiesOf("Item Articulos", module)
    .addDecorator((story) => <div style={{ padding: "3rem 15rem" }}>{story()}</div>)
    .add("All list", () => <ItemArticulo {...itemAllList} />)
    .add("All list buy list", () => <ItemArticulo {...itemAllListBuyList} />)
    .add("All buy list", () => <ItemArticulo {...itemBuyList} />);
