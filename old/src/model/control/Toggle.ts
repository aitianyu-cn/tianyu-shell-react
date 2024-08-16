/** @format */

import { IReactControlProperty } from "@aitianyu.cn/tianyu-shell/react";

export type ReactToggleType = "default" | "square" | "line";

export interface IReactToggleProperty extends IReactControlProperty {
    id: string;
    size?: number;
    lineLenght?: number;
    defaultState?: boolean;
    type?: ReactToggleType;
    borderRadio?: number;
    selectedBackground?: string;
    unSelectedBackground?: string;
    border?: string;
    toggleColor?: string;
    onStateChange?: (id: string, state: boolean) => void;
}

export const ReactToggleButtonStoreType = "tianyu-shell-react-toggleButton";
