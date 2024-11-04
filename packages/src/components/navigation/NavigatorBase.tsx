/** @format */

import { IterableType } from "@aitianyu.cn/tianyu-store";
import { ControlledElement } from "model/ControlledElement";
import { INavigatorBaseState } from "model/store/NavigationState";
import { INavigatorProperty } from "types/widget/Navigation";

export class NavigatorBase<P = INavigatorProperty, S extends IterableType = INavigatorBaseState> extends ControlledElement<
    P,
    S
> {}
