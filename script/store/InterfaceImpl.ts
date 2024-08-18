/** @format */

import { ITianyuStoreInterface } from "@aitianyu.cn/tianyu-store";
import { AppStoreState } from "./StoreState";
import { ActionCreatorAction, ActionDestroyAction } from "./action/ActionCreatorAction";
import {
    AddNormalButtonAction,
    AddRadioGroupAction,
    AddToggleButtonAction,
    ClickNormalButtonAction,
    EnableNormalButtonAction,
    EnableRadioButtonAction,
    EnableToggleButtonAction,
    JoinRadioButtonGroupAction,
    SelectRadioButtonAction,
    SwitchToggleButtonAction,
} from "./action/ButtonAction";
import { GetNormalButtonState, GetRadioButtonState, GetToggleButtonState } from "./selector/ButtonSelector";

export const StoreInterfaceImpl = {
    core: {
        creator: ActionCreatorAction,
        destroy: ActionDestroyAction,
    },

    widget: {
        button: {
            toggleButton: {
                add: AddToggleButtonAction,
                enable: EnableToggleButtonAction,
                switch: SwitchToggleButtonAction,

                get: GetToggleButtonState,
            },

            normal: {
                add: AddNormalButtonAction,
                enable: EnableNormalButtonAction,
                click: ClickNormalButtonAction,

                get: GetNormalButtonState,
            },

            radioButton: {
                addGroup: AddRadioGroupAction,

                join: JoinRadioButtonGroupAction,
                enable: EnableRadioButtonAction,
                select: SelectRadioButtonAction,

                get: GetRadioButtonState,
            },
        },
    },

    container: {},
};

StoreInterfaceImpl as ITianyuStoreInterface<AppStoreState>;
