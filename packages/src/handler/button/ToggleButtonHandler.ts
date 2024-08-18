/** @format */

import { CommonStylingsColor } from "handler/CommonStylingHandler";
import { IElementStyleProperty } from "types/TianyuElement";
import { IToggleButtonProperty } from "types/widget/Button";

export function toggleButtonStylingGenerator(
    prop: IElementStyleProperty & IToggleButtonProperty,
    enable: boolean,
    actualSize: number,
    additionLength: number,
    marginLeft: number,
    borderRadio: number,
) {
    const baseStyle = {
        ...(prop.style || {}),
        height: actualSize,
        width: actualSize * 2 + additionLength,
    };
    const innerStyle = {
        width: "100%",
        height: "100%",
        borderRadius: borderRadio,
        border: prop.border || "1px var(--ts_ui_blk_7) solid",

        backgroundColor: enable ? prop.unSelectedBackground || "var(--ts_ui_blk_8)" : CommonStylingsColor.disable.default,
    };

    const selected = {
        height: actualSize,
        width: marginLeft + actualSize,
        borderRadius: borderRadio,
        backgroundColor: enable ? prop.selectedBackground || "var(--ts_ui_blk_17)" : CommonStylingsColor.disable.selected,
    };

    const buttonStyle = {
        width: actualSize,
        height: actualSize,
        borderRadius: borderRadio,

        backgroundColor: enable ? prop.toggleColor || "var(--ts_ui_blk_2)" : CommonStylingsColor.disable.front,
        marginLeft: marginLeft,
    };

    return { baseStyle, innerStyle, selected, buttonStyle };
}
