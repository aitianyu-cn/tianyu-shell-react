/** @format */

import { ITianyuStoreInterface } from "@aitianyu.cn/tianyu-store";
import { AppStoreState } from "./StoreState";
import { ActionCreatorAction, ActionDestroyAction } from "./action/ActionCreatorAction";
import {
    AddCheckboxButtonAction,
    AddNormalButtonAction,
    AddRadioGroupAction,
    AddToggleButtonAction,
    ClickCheckboxButtonAction,
    ClickNormalButtonAction,
    EnableCheckboxButtonAction,
    EnableNormalButtonAction,
    EnableRadioButtonAction,
    EnableToggleButtonAction,
    JoinRadioButtonGroupAction,
    SelectRadioButtonAction,
    SwitchToggleButtonAction,
} from "./action/ButtonAction";
import {
    GetCheckboxButtonState,
    GetNormalButtonState,
    GetRadioButtonState,
    GetToggleButtonState,
} from "./selector/ButtonSelector";
import { AddCheckboxSelectorAction, AddDropdownSelectorAction, SelectDropdownSelectorAction } from "./action/SelectorAction";
import { GetCheckboxSelectorState, GetDropdownSelectorState } from "./selector/SelectorSelector";
import { TianyuReact } from "tianyu-shell-react";
import { AddNavigationItemAction, ClickNavigationItemAction } from "./action/navigation/NavigationItemAction";
import { GetNavigationItemState } from "./selector/navigation/NavigationItemSelector";
import { GetNavigatorDisplayState } from "./selector/navigation/NavigatorSelector";

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

                checkbox: {
                    add: AddCheckboxButtonAction,
                    enable: EnableCheckboxButtonAction,

                    click: ClickCheckboxButtonAction,

                    state: GetCheckboxButtonState,
                },
            },

            select: {
                dropdown: {
                    add: AddDropdownSelectorAction,
                    select: SelectDropdownSelectorAction,
                    state: GetDropdownSelectorState,
                },

                checkbox: {
                    add: AddCheckboxSelectorAction,

                    state: GetCheckboxSelectorState,
                },
            },

            navigator: {
                button: {
                    add: AddNavigationItemAction,
                    click: ClickNavigationItemAction,
                    state: GetNavigationItemState,
                },

                container: {
                    displayType: GetNavigatorDisplayState,
                },
            },
        },

        container: {},
    },
};

StoreInterfaceImpl as ITianyuStoreInterface<AppStoreState>;
StoreInterfaceImpl as TianyuReact.Template.Button;
StoreInterfaceImpl as TianyuReact.Template.DropdownSelector;
StoreInterfaceImpl as TianyuReact.Template.CommonSelector;

StoreInterfaceImpl as TianyuReact.Template.Navigation.NavigationItemStoreTemplate;
StoreInterfaceImpl as TianyuReact.Template.Navigation.NavigatorStoreTemplate;
