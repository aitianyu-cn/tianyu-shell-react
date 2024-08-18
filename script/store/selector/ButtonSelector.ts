/** @format */

import { SelectorFactor } from "@aitianyu.cn/tianyu-store";
import { AppStoreState, IToggleButtonState } from "../StoreState";
import { IButtonPortState } from "model/store/ButtonState";

export const GetToggleButtonState = SelectorFactor.makeParameterSelector<AppStoreState, string, IButtonPortState>(function (
    state,
    id,
): IButtonPortState {
    return (
        state.buttons.toggleButton[id] || {
            enable: false,
            selected: false,
            text: "",
        }
    );
});

export const GetNormalButtonState = SelectorFactor.makeParameterSelector<AppStoreState, string, IButtonPortState>(function (
    state,
    id,
): IButtonPortState {
    const button = state.buttons.button[id];
    return {
        enable: !!button?.enable,
        selected: false,
        text: `Clicked: ${button?.count}`,
    };
});

export const GetRadioButtonState = SelectorFactor.makeParameterSelector<
    AppStoreState,
    { group: string; button: string },
    IButtonPortState
>(function (state, data) {
    const radioButton = state.buttons.radioButton[data.group];
    return {
        enable: !radioButton.disabled.includes(data.button),
        selected: radioButton.active === data.button,
        text: radioButton.radios[data.button],
    };
});
