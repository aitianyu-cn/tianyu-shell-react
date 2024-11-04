/** @format */

import { SelectorFactor } from "@aitianyu.cn/tianyu-store";
import { AppStoreState } from "script/store/StoreState";
import { NavigatorDisplayType } from "types/widget/Navigation";

export const GetNavigatorDisplayState = SelectorFactor.makeParameterSelector<
    AppStoreState,
    string,
    {
        type: NavigatorDisplayType;
        expand: boolean;
    }
>(function (state, id) {
    return {
        type: state.navigation.item.type,
        expand: state.navigation.item.expand,
    };
});
