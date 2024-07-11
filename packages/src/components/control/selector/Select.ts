/** @format */

import { SelectorFactor } from "@aitianyu.cn/tianyu-store";
import { ArrayHelper, KeyValuePair } from "@aitianyu.cn/types";
import { IReactSelectorState } from "model/control/Selector";

export const ValidateSelectionSelector = SelectorFactor.makeParameterSelector<IReactSelectorState, string, boolean>(function (
    state,
    selection,
) {
    return Boolean(state.options.find((pair) => pair.key === selection));
});

export const GetOptionValueSelector = SelectorFactor.makeParameterSelector<IReactSelectorState, string, string | null>(function (
    state,
    selection,
) {
    return state.options.find((pair) => pair.key === selection)?.value || null;
});

export const GetDefaultSelectionSelector = SelectorFactor.makeSelector<IReactSelectorState, string>(function (state) {
    return state.default;
});

export const GetCurrentSelectionSelector = SelectorFactor.makeSelector<IReactSelectorState, string>(function (state) {
    return state.current;
});

export const GetOptionHasSelectorKey = SelectorFactor.makeConstantSelector<
    boolean,
    { options: KeyValuePair<string, string>[]; key: string }
>(function (_, data) {
    const foundPair = data.options.find((pair) => pair.key === data.key);
    return Boolean(foundPair);
});

export const RemoveSelectorKeyFromOptions = SelectorFactor.makeConstantSelector<
    KeyValuePair<string, string>[],
    { options: KeyValuePair<string, string>[]; key: string }
>(function (_, data) {
    // to remove the duplicate element in the first to avoid there are two pairs matched the key
    const options = ArrayHelper.merge(...data.options);
    const index = options.findIndex((pair) => pair.key === data.key);
    if (-1 !== index) {
        options.splice(index, 1);
    }

    return options;
});
