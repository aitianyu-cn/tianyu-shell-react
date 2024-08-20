/** @format */

import { SelectorFactor } from "@aitianyu.cn/tianyu-store";
import { AppStoreState } from "../StoreState";
import { TianyuReact } from "tianyu-shell-react";

export const GetDropdownSelectorState = SelectorFactor.makeParameterSelector<
    AppStoreState,
    string,
    TianyuReact.State.IDropdownSelectorState
>(function (state, id) {
    return (
        state.selector.dropdown[id] || {
            enable: false,
            selected: "",
            items: [],
        }
    );
});

export const GetCheckboxSelectorState = SelectorFactor.makeParameterSelector<
    AppStoreState,
    string,
    TianyuReact.State.ISelectorState
>(function (state, id) {
    return (
        state.selector.checkbox[id] || {
            enable: false,
            selected: [],
            items: [],
        }
    );
});
