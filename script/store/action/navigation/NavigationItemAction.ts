/** @format */

import { ActionFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { AppStoreState } from "../../StoreState";
import { NavigatorDisplayType } from "types/widget/Navigation";
import { ObjectHelper } from "@aitianyu.cn/types";
import { INavigationItemState } from "model/store/NavigationState";

export const AddNavigationItemAction = ActionFactor.makeActionCreator<
    AppStoreState,
    { id: string } & INavigationItemState
>().withReducer(function (state, item) {
    return StoreUtils.State.getNewState(state, ["navigation", "item", "normal"], {
        ...state.navigation.item.normal,
        [item.id]: item,
    });
});

export const ClickNavigationItemAction = ActionFactor.makeActionCreator<
    AppStoreState,
    { containerId: string; id: string }
>().withReducer(function (state, id) {
    const newState = ObjectHelper.clone(state) as AppStoreState;
    switch (newState.navigation.item.type) {
        case "horizontal":
            newState.navigation.item.type = "vertical";
            newState.navigation.item.expand = false;
            break;
        case "vertical":
            if (newState.navigation.item.expand) {
                newState.navigation.item.type = "narrow";
                newState.navigation.item.expand = false;
            } else {
                newState.navigation.item.type = "vertical";
                newState.navigation.item.expand = true;
            }
            break;
        case "narrow":
            newState.navigation.item.type = "horizontal";
            newState.navigation.item.expand = false;
            break;
    }
    newState.navigation.item.normal[id.id].select = !newState.navigation.item.normal[id.id].select;
    return newState;
});
