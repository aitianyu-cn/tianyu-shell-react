/** @format */

import { IReactProperty, IReactState } from "@aitianyu.cn/tianyu-shell/react";
import { InstanceId } from "@aitianyu.cn/tianyu-store";
import { KeyValuePair } from "@aitianyu.cn/types/dist/types/types/Types";

export interface IReactSelectorProperty extends IReactProperty {
    default: string;
    instanceId: InstanceId;
}

export interface IReactSelectorState extends IReactState {
    options: KeyValuePair<string, string>[];
    default: string;
    current: string;
}

export const ReactSelectorStoreType = "tianyu-shell-react-selector";
