/** @format */

import { IterableType } from "@aitianyu.cn/tianyu-store";
import { KeyValuePair } from "@aitianyu.cn/types";

export interface IDropdownSelectorState extends IterableType {
    enable: boolean;
    selected: string;
    items: KeyValuePair<string, string>[];
}
