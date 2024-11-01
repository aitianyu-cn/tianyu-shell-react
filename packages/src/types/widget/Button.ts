/** @format */

/**
 * Tianyu React Toggle Button display styling
 *
 * @field default: a generic toggle button shown with a cambered border.
 * @field square: displayed with a square border.
 * @field line: displayed like a line button.
 */
export type ReactToggleType = "default" | "square" | "line";

/** Tianyu React Button basic property */
export interface IButtonProperty {
    /** Size of button */
    size?: number;
    /** Additional button width size */
    lineLength?: number;
    /** Border radio */
    borderRadio?: number;
    /** Border Styling */
    border?: string;
}

/** Tianyu React Toggle Button Property */
export interface IToggleButtonProperty extends IButtonProperty {
    /** The background color when the toggle is selected */
    selectedBackground?: string;
    /** The background color when the toggle is not selected */
    unSelectedBackground?: string;
    /** The toggle button sliding block color */
    toggleColor?: string;
    /** The toggle button display styling */
    type?: ReactToggleType;
}

/** Tianyu React Radio Button Property */
export interface IRadioButtonProperty extends IButtonProperty {
    /** The Group where the Radio Button belongs to */
    group: string;
    /** Color of radio button text and border */
    color?: string;
    /** Color of radio button selected block */
    selectedColor?: string;
    /** Size of text and selection block */
    insideMargin?: number;
}

/** Tianyu React Checkbox Button Property */
export interface ICheckboxButtonProperty extends IButtonProperty {
    /** The group of the checkbox button if the checkbox is grouped */
    group?: string;
}
