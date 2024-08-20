/** @format */

import { ActionFactor } from "@aitianyu.cn/tianyu-store";
import { AppStoreState } from "../StoreState";

export const ActionCreatorAction = ActionFactor.makeCreateStoreAction<AppStoreState>().withReducer(function () {
    return {
        buttons: {
            toggleButton: {},
            button: {},
            radioButton: {},
            checkboxButton: {},
        },
        selector: {
            dropdown: {},
            checkbox: {},
        },
    };
});

export const ActionDestroyAction = ActionFactor.makeDestroyStoreAction();
