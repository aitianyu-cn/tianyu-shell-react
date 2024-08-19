/** @format */

import React from "react";
import { Property } from "csstype";
import { IElementStyleProperty } from "types/TianyuElement";
import { IGroupableButtonProperty } from "types/widget/Button";
import { CommonStylingsColor } from "handler/CommonStylingHandler";

export function radioButtonStylingGenerator(
    prop: IElementStyleProperty & IGroupableButtonProperty,
    enable: boolean,
    selected: boolean,
) {
    const size = prop.size || 16;
    const selectSize = size / 2;

    const baseStyle = {
        ...(prop.style || {}),
        display: "flex",
    };
    const containerStyle = {
        marginTop: "auto",
        marginBottom: "auto",
        width: size,
        height: size,
        borderRadius: size,
        border: prop.border || "1px var(--ts_ui_blk_7) solid",
        backgroundColor: enable ? prop.color || "#ffffff00" : CommonStylingsColor.disable.background,
    };
    const buttonStyle = {
        width: selectSize,
        height: selectSize,
        borderRadius: selectSize,
        margin: (size - selectSize) / 2,
        opacity: `${selected ? "100" : "0"}%`,
        backgroundColor: enable ? prop.selectedColor || "var(--ts_ui_blk_2)" : CommonStylingsColor.disable.background,
    };
    const textStyle: React.CSSProperties = {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: prop.insideMargin || 10,
        userSelect: "none" as Property.UserSelect,
        color: enable ? undefined : CommonStylingsColor.disable.front,
    };

    return { baseStyle, containerStyle, buttonStyle, textStyle };
}
