/**@format */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type StandardLonghandProperties = any;

export type IReactBaseType = string | boolean | number | IReactBaseType[];

export interface IReactProperty {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [key: string]: IReactBaseType | Function | IReactProperty;
}

export interface IReactState {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [key: string]: IReactBaseType | Function | IReactState;
}

export interface IReactControlProperty {
    style?: StandardLonghandProperties;
    width?: number;
}
