/** @format */

import { SelectorFactor } from "@aitianyu.cn/tianyu-store";
import { INavigationItemState } from "model/store/NavigationState";
import { AppStoreState } from "script/store/StoreState";

export const GetNavigationItemState = SelectorFactor.makeParameterSelector<
    AppStoreState,
    { containerId: string; id: string },
    INavigationItemState
>(function (state, id) {
    return state.navigation.item.normal[id.id];
});
