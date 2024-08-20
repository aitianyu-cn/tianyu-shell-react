/** @format */

import { ActionFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { AppStoreState } from "../StoreState";
import { KeyValuePair } from "@aitianyu.cn/types";

export const AddDropdownSelectorAction = ActionFactor.makeActionCreator<
    AppStoreState,
    {
        id: string;
        enable: boolean;
        values: KeyValuePair<string, string>[];
        default: string;
    }
>().withReducer(function (state, selector) {
    return StoreUtils.State.getNewState(state, ["selector", "dropdown"], {
        ...state.selector.dropdown,
        [selector.id]: {
            enable: selector.enable,
            selected: selector.default,
            items: selector.values,
        },
    });
});
export const SelectDropdownSelectorAction = ActionFactor.makeActionCreator<
    AppStoreState,
    { id: string; value: string }
>().withReducer(function (state, data) {
    return StoreUtils.State.getNewState(state, ["selector", "dropdown", data.id, "selected"], data.value);
});

export const AddCheckboxSelectorAction = ActionFactor.makeActionCreator<
    AppStoreState,
    {
        id: string;
        enable: boolean;
        values: KeyValuePair<string, string>[];
        selected: string[];
        disabled: string[];
    }
>().withReducer(function (state, selector) {
    return StoreUtils.State.getNewState(state, ["selector", "checkbox"], {
        ...state.selector.checkbox,
        [selector.id]: {
            enable: selector.enable,
            selected: selector.selected,
            items: selector.values,
            disabled: selector.disabled,
        },
    });
});
