/** @format */

import { IReactProperty, IReactState } from "@aitianyu.cn/tianyu-shell/react";
import { InstanceId } from "@aitianyu.cn/tianyu-store";

export interface IControlledElementProperty extends IReactProperty {
    intanceId: InstanceId;
}

export interface IStatefullElementProperty<S extends IReactState> extends IControlledElementProperty {
    state: S;
}

export interface IElementStyleProperty {
    style?: React.CSSProperties;
}

export type ReactControlledProperty<P = {}> = IControlledElementProperty & IElementStyleProperty & P;

export type ReactStatefullProperty<P = {}, S extends IReactState = {}> = IStatefullElementProperty<S> & IElementStyleProperty & P;
