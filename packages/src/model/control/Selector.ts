/** @format */

import { IReactControlProperty, IReactState } from "@aitianyu.cn/tianyu-shell/react";
import { InstanceId, IterableType } from "@aitianyu.cn/tianyu-store";
import { KeyValuePair } from "@aitianyu.cn/types/dist/types/types/Types";

export interface IReactSelectorOptionValue extends IterableType {
    value: string;
}

export interface IReactSelectorOptionProperty extends IReactControlProperty {
    height?: number;
    hoverColor?: string;
    selectedColor?: string;
}

export interface IReactSelectorProperty extends IReactControlProperty {
    default: string;
    instanceId: InstanceId;
    options: KeyValuePair<string, string>[];

    height?: number;
    color?: string;
    insideMargin?: number | string;
    border?: string;
    radius?: number;

    optionStyle?: IReactSelectorOptionProperty;
}

export interface IReactSelectorState extends IReactState {
    options: KeyValuePair<string, string>[];
    default: string;
    current: string;
}

export const ReactSelectorStoreType = "tianyu-shell-react-selector";
