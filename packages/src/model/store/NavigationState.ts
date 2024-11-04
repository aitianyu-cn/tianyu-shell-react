/** @format */

import { DisplayDirectionType, SourceIconType } from "types/Common";
import { ITianyuReactState } from "./State";
import { MapOfType } from "@aitianyu.cn/types";
import { IterableType } from "@aitianyu.cn/tianyu-store";
import { NavigatorDisplayType } from "types/widget/Navigation";

export interface INavigationItemBaseState extends ITianyuReactState {
    text: string;
    size: number;
    icon: any;
    type: SourceIconType;
    assist: boolean;
}

export interface INavigationItemState extends INavigationItemBaseState {
    select: boolean;
}

export interface INavigationViewItemState extends INavigationItemBaseState {}

export interface INavigationListState extends INavigationItemBaseState {
    select: boolean;
}

//
// Navigator Container States
//

export interface INavigatorStateItem extends IterableType {
    id: string;
    assist: boolean;
    index: number;
}

export interface INavigatorBaseState extends ITianyuReactState {
    id: string;
    type: NavigatorDisplayType;
    items: MapOfType<INavigatorStateItem>;
}

export interface INavigatorHorizontalState extends INavigatorBaseState {}

export interface INavigatorVerticalState extends INavigatorBaseState {}

export interface INavigatorState extends INavigatorHorizontalState, INavigatorVerticalState {}
