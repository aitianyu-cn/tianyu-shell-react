/** @format */

import { SelectorFactor } from "@aitianyu.cn/tianyu-store";
import { AppStoreState } from "../StoreState";
import { TianyuReact } from "tianyu-shell-react";

export const GetToggleButtonState = SelectorFactor.makeParameterSelector<
    AppStoreState,
    string,
    TianyuReact.State.IButtonTemplateState
>(function (state, id): TianyuReact.State.IButtonTemplateState {
    return (
        state.buttons.toggleButton[id] || {
            enable: false,
            selected: false,
            text: "",
        }
    );
});

export const GetNormalButtonState = SelectorFactor.makeParameterSelector<
    AppStoreState,
    string,
    TianyuReact.State.IButtonTemplateState
>(function (state, id): TianyuReact.State.IButtonTemplateState {
    const button = state.buttons.button[id];
    return {
        enable: !!button?.enable,
        selected: false,
        text: `Clicked: ${button?.count}`,
    };
});

export const GetRadioButtonState = SelectorFactor.makeParameterSelector<
    AppStoreState,
    { group: string; id: string },
    TianyuReact.State.IButtonTemplateState
>(function (state, data) {
    const radioButton = state.buttons.radioButton[data.group];
    return {
        enable: !radioButton.disabled.includes(data.id),
        selected: radioButton.active === data.id,
        text: radioButton.radios[data.id],
    };
});

export const GetCheckboxButtonState = SelectorFactor.makeParameterSelector<
    AppStoreState,
    { group: string; id: string } | string,
    TianyuReact.State.IButtonTemplateState
>(function (state, data) {
    if (typeof data === "string") {
        return state.buttons.checkboxButton[data];
    } else {
        const selector = state.selector.checkbox[data.group];
        return {
            enable: selector.enable && !selector.disabled.includes(data.id),
            selected: selector.selected.includes(data.id),
            text: selector.items.find((item) => item.key === data.id)?.value || "",
        };
    }
});
