/** @format */

import { SelectorFactor } from "@aitianyu.cn/tianyu-store";
import { ObjectHelper } from "@aitianyu.cn/types";
import { IReactRadioButtonState } from "model/control/RadioButton";

export const GetAllSelectorsSelector = SelectorFactor.makeSelector<IReactRadioButtonState, string[]>(function (state) {
    return ObjectHelper.clone(state.selectors);
});

export const GetCurrentSelectionSelector = SelectorFactor.makeSelector<IReactRadioButtonState, string>(function (state) {
    return state?.current[0] || "";
});

export const GetAllSelectionsSelector = SelectorFactor.makeSelector<IReactRadioButtonState, string[]>(function (state) {
    return ObjectHelper.clone(state.current);
});

export const IsSelectedSelector = SelectorFactor.makeParameterSelector<IReactRadioButtonState, string, boolean>(function (
    state,
    selector,
) {
    return state.current.includes(selector);
});
