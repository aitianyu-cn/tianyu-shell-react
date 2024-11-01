/** @format */

import { IReactProperty, IReactState } from "@aitianyu.cn/tianyu-shell/react";
import { InstanceId } from "@aitianyu.cn/tianyu-store";

/** Tianyu Controlled Element property */
export interface IControlledElementProperty extends IReactProperty {
    /**
     * Flag to indicate whether the element instance should register a subscribe to response the state change.
     *
     * - undefined: response the state change
     * - true:      response the state change
     * - false:     not-response the state change
     */
    subscribeable?: boolean;
    /** The instance id of element state */
    instanceId: InstanceId;
}

/** Tianyu State Controlled Element property */
export interface IStatefullElementProperty<S extends IReactState> extends IControlledElementProperty {
    /** The initial state of element instance */
    state?: S;
}

/** Tianyu Element Styling Property */
export interface IElementStyleProperty {
    /** Basic styling */
    style?: React.CSSProperties;
}

/**
 * Tianyu React Controlled Element Property
 * Combined with Controlled Element Property and Element Style Property
 */
export type ReactControlledProperty<P = {}> = IControlledElementProperty & IElementStyleProperty & P;

/**
 * Tianyu React Full State Element Property
 * Combined with State Full Element Property and Element Style Property
 */
export type ReactStatefullProperty<P = {}, S extends IReactState = {}> = IStatefullElementProperty<S> & IElementStyleProperty & P;
