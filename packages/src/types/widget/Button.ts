/** @format */

export type ReactToggleType = "default" | "square" | "line";

export interface IButtonProperty {
    size?: number;
    lineLenght?: number;
    type?: ReactToggleType;
    borderRadio?: number;
    border?: string;
}

export interface IToggleButtonProperty extends IButtonProperty {
    defaultState?: boolean;
    selectedBackground?: string;
    unSelectedBackground?: string;
    toggleColor?: string;
}

export interface IRadioButtonProperty extends IButtonProperty {
    group: string;
    color?: string;
    selectedColor?: string;
    insideMargin?: number;
}

export interface ICheckboxButtonProperty extends IButtonProperty {
    group?: string;
}
