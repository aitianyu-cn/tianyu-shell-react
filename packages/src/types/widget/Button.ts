/** @format */

export type ReactToggleType = "default" | "square" | "line";

export interface IButtonProperty {
    lineLenght?: number;
    type?: ReactToggleType;
    borderRadio?: number;
    border?: string;
}

export interface IToggleButtonProperty extends IButtonProperty {
    size?: number;
    defaultState?: boolean;
    selectedBackground?: string;
    unSelectedBackground?: string;
    toggleColor?: string;
}

export interface IGroupableButtonProperty extends IButtonProperty {
    group: string;
    size?: number;
    color?: string;
    selectedColor?: string;
    insideMargin?: number;
}
