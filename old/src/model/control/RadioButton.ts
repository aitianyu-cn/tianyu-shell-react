/**@format */

import { IReactProperty, IReactState } from "@aitianyu.cn/tianyu-shell/react";
import { InstanceId } from "@aitianyu.cn/tianyu-store";
// import { ISingleSelectorGroup } from "./Selector";

export interface IReactRadioButtonProperty extends IReactProperty {
    // group: ISingleSelectorGroup;
    id: string;
    value: string;
    // selected?: boolean;
    size?: number;
    color?: string;
    selectedColor?: string;
    border?: string;
    insideMargin?: number | string;
    instanceId: InstanceId;
    defaultSelection?: string;
}

export interface IReactRadioButtonState extends IReactState {
    selectors: string[];
    current: string[];
    default: string[];
}

export const ReactRadioButtonStoreType = "tianyu-shell-react-radioButton";
