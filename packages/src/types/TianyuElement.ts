/** @format */

import { IReactProperty, IReactState } from "@aitianyu.cn/tianyu-shell/react";
import { IInstanceAction, IInstanceSelector, IInstanceViewAction } from "@aitianyu.cn/tianyu-store";

export type ElementStoreInterface = IInstanceAction | IInstanceViewAction | IInstanceSelector<any>;

export interface IElementStorePorts {
    [key: string]: ElementStoreInterface | IElementStorePorts;
}

export interface IControlledElementProperty<STORE_INTERFACE extends IElementStorePorts> extends IReactProperty {
    ports?: STORE_INTERFACE;
}

export interface IStatefullElementProperty<S extends IReactState, STORE_INTERFACE extends IElementStorePorts = {}>
    extends IControlledElementProperty<STORE_INTERFACE> {
    state: S;
}

export interface IElementStyleProperty {
    style?: React.CSSProperties;
}

export type ReactControlledProperty<
    STORE_INTERFACE extends IElementStorePorts,
    P = {},
> = IControlledElementProperty<STORE_INTERFACE> & IElementStyleProperty & P;

export type ReactStatefullProperty<
    STORE_INTERFACE extends IElementStorePorts,
    P = {},
    S extends IReactState = {},
> = IStatefullElementProperty<S, STORE_INTERFACE> & IElementStyleProperty & P;
