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
import { AddDropdownSelectorAction, SelectDropdownSelectorAction } from "./action/SelectorAction";
import { GetDropdownSelectorState } from "./selector/SelectorSelector";
import { TianyuReact } from "tianyu-shell-react";

export const StoreInterfaceImpl = {
    core: {
        creator: ActionCreatorAction,
        destroy: ActionDestroyAction,
    },

    react: {
        widget: {
            button: {
                toggle: {
                    add: AddToggleButtonAction,
                    enable: EnableToggleButtonAction,
                    click: SwitchToggleButtonAction,

                    state: GetToggleButtonState,
                },

                button: {
                    add: AddNormalButtonAction,
                    enable: EnableNormalButtonAction,
                    click: ClickNormalButtonAction,

                    state: GetNormalButtonState,
                },

                radio: {
                    addGroup: AddRadioGroupAction,

                    join: JoinRadioButtonGroupAction,
                    enable: EnableRadioButtonAction,
                    click: SelectRadioButtonAction,

                    state: GetRadioButtonState,
                },
            },

            select: {
                dropdown: {
                    add: AddDropdownSelectorAction,
                    select: SelectDropdownSelectorAction,
                    state: GetDropdownSelectorState,
                },
            },
        },

        container: {},
    },
};

StoreInterfaceImpl as ITianyuStoreInterface<AppStoreState>;
StoreInterfaceImpl as TianyuReact.Template.Button;
StoreInterfaceImpl as TianyuReact.Template.DropdownSelector;
