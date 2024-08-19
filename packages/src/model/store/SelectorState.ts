/** @format */

import { KeyValuePair } from "@aitianyu.cn/types";
import { ITianyuReactState } from "./State";

export interface ICommonSelectorState extends ITianyuReactState {
    items: KeyValuePair<string, string>[];
}

export interface IDropdownSelectorState extends ICommonSelectorState {
    selected: string;
}

export interface ISelectorState extends ICommonSelectorState {
    selected: string[];
}
