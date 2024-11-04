/** @format */

import { IterableType } from "@aitianyu.cn/tianyu-store";
import { MapOfString } from "@aitianyu.cn/types";
import { INavigationItemState, INavigationViewItemState, INavigationListState } from "model/store/NavigationState";
import { IDropdownSelectorState, ISelectorState } from "model/store/SelectorState";
import { NavigatorDisplayType } from "types/widget/Navigation";

export interface IToggleButtonState extends IterableType {
    enable: boolean;
    selected: boolean;
    text: string;
}

export interface INormalButtonState extends IterableType {
    enable: boolean;
    count: number;
}

export interface IRadioButtonState extends IterableType {
    radios: MapOfString;
    disabled: string[];
    active: string;
}

export interface INavigatorState extends IterableType {}

export interface AppStoreState extends IterableType {
    buttons: {
        toggleButton: { [key: string]: IToggleButtonState };
        button: { [key: string]: INormalButtonState };
        radioButton: { [key: string]: IRadioButtonState };
        checkboxButton: { [key: string]: IToggleButtonState };
    };
    selector: {
        dropdown: { [key: string]: IDropdownSelectorState };
        checkbox: { [key: string]: ISelectorState & { disabled: string[] } };
    };
    navigation: {
        item: {
            type: NavigatorDisplayType;
            expand: boolean;
            normal: { [key: string]: INavigationItemState };
            view: { [key: string]: INavigationViewItemState };
            list: { [key: string]: INavigationListState };
        };
        container: { [key: string]: INavigatorState };
    };
}

export const TIANYU_REACT_TEST_STORE_TYPE = "tianyu-shell-react-test";
