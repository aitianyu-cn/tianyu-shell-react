/** @format */

import { Property } from "csstype";
import { CommonStylingsColor } from "handler/CommonStylingHandler";
import { IButtonTemplateState } from "model/store/ButtonState";
import { ButtonInterfaceTemplate } from "model/store/template/ButtonTemplate";
import { IElementStyleProperty, ReactControlledProperty } from "types/TianyuElement";
import { ICheckboxButtonProperty } from "types/widget/Button";

export function checkboxButtonStylingGenerator(
    prop: IElementStyleProperty & ICheckboxButtonProperty,
    enable: boolean,
    selected: boolean,
) {
    const size = prop.size || 25;
    const selectSize = size * 0.75;

    const baseStyle = {
        ...(prop.style || {}),
        display: "flex",
    };
    const containerStyle = {
        marginTop: "auto",
        marginBottom: "auto",
        width: size,
        height: size,
        borderRadius: size * 0.1,
        border: prop.border || "1px var(--ts_ui_blk_7) solid",
        // backgroundColor: prop.color || "#ffffff00",
        backgroundColor: enable ? "#ffffff00" : CommonStylingsColor.disable.background,
    };
    const buttonStyle = {
        width: selectSize,
        height: selectSize,
        borderRadius: selectSize * 0.1,
        margin: (size - selectSize) / 2,
        opacity: `${selected ? "100" : "0"}%`,
        // backgroundColor: this.props.selectedColor || "var(--ts_ui_blk_2)",
        backgroundColor: enable ? "var(--ts_ui_blk_2)" : CommonStylingsColor.disable.selected,
    };
    const textStyle = {
        marginTop: "auto",
        marginBottom: "auto",
        // marginLeft: this.props.insideMargin || 10,
        marginLeft: 10,
        userSelect: "none" as Property.UserSelect,
        color: enable ? undefined : CommonStylingsColor.disable.front,
    };

    return { baseStyle, containerStyle, buttonStyle, textStyle };
}

export function getCheckboxButtonStateFromStore(prop: ReactControlledProperty<ICheckboxButtonProperty>): IButtonTemplateState {
    return prop.store.selecteWithThrow(
        prop.group
            ? ButtonInterfaceTemplate.react.widget.button.checkbox.state(prop.instanceId, {
                  group: prop.group,
                  id: prop.id,
              })
            : ButtonInterfaceTemplate.react.widget.button.checkbox.state(prop.instanceId, prop.id),
    );
}
