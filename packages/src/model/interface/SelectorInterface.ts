/** @format */

import { IInstanceAction, IInstanceSelector } from "@aitianyu.cn/tianyu-store";
import { IDropdownSelectorState } from "model/store/SelectorState";
import { IElementStorePorts } from "types/TianyuElement";

export interface IDropdownSelectorPorts extends IElementStorePorts {
    select: IInstanceAction;

    state: IInstanceSelector<IDropdownSelectorState>;
}
