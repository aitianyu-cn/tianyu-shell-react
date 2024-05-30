/**@format */

import { ITianyuShell } from "@aitianyu.cn/tianyu-shell/core";
import { IterableType } from "@aitianyu.cn/tianyu-store";

export const TianyuShell: ITianyuShell = (window as any).tianyuShell;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type StandardLonghandProperties = any;

export interface IReactProperty extends IterableType {}

export interface IReactState extends IterableType {}

export interface IReactControlProperty {
    style?: StandardLonghandProperties;
    width?: number;
}
