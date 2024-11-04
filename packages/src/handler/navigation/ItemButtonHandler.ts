/** @format */

import { ReactControlledProperty } from "types/TianyuElement";
import { INavigationItemProperty } from "types/widget/Navigation";
import { NAVIGATION_ITEM_DEFAULT_HEIGHT, NAVIGATION_ITEM_DEFAULT_SIZE, NAVIGATION_ITEM_SIDE_PADDING } from "./ItemCalculation";
import { Property } from "csstype";

export function navigationItemButtonStylingGenerator(prop: ReactControlledProperty<INavigationItemProperty>) {
    const rootContainerStyling = {
        ...(prop.style || {}),
        width: prop.style?.width || "fit-content",
        height: prop.style?.height || `${NAVIGATION_ITEM_DEFAULT_HEIGHT}px`,
        display: "flex",
        paddingLeft: prop.style?.paddingLeft || `${NAVIGATION_ITEM_SIDE_PADDING}px`,
        paddingRight: prop.style?.paddingRight || `${NAVIGATION_ITEM_SIDE_PADDING}px`,
        alignContent: "center",
        alignItems: "center",
        textAlign: "center" as Property.TextAlign,
        userSelect: "none" as Property.UserSelect,
    };

    const iconStyling = {
        width: prop.style?.height || `${NAVIGATION_ITEM_DEFAULT_HEIGHT}px`,
        height: prop.style?.height || `${NAVIGATION_ITEM_DEFAULT_HEIGHT}px`,
        marginTop: "auto",
        marginBottom: "auto",
        alignContent: "center",
        marginLeft: "10px",
        marginRight: "10px",
    };

    const fontStyling = {
        marginTop: "auto",
        marginBottom: "auto",
        height: prop.style?.height || `${NAVIGATION_ITEM_DEFAULT_HEIGHT}px`,
        alignContent: "center",
        fontSize: prop.style?.fontSize || `${NAVIGATION_ITEM_DEFAULT_SIZE}px`,
        color: prop.style?.color,
    };

    return { rootContainerStyling, iconStyling, fontStyling };
}
