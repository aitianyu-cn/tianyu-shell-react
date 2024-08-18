/** @format */

import { IterableType } from "@aitianyu.cn/tianyu-store";
import { MapOfString } from "@aitianyu.cn/types";

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

export interface AppStoreState extends IterableType {
    buttons: {
        toggleButton: { [key: string]: IToggleButtonState };
        button: { [key: string]: INormalButtonState };
        radioButton: { [key: string]: IRadioButtonState };
    };
}

export const TIANYU_REACT_TEST_STORE_TYPE = "tianyu-shell-react-test";
