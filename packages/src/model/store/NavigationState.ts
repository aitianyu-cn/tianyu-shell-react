/** @format */

import { DisplayDirectionType, SourceIconType } from "types/Common";
import { ITianyuReactState } from "./State";
import { MapOfType } from "@aitianyu.cn/types";
import { IterableType } from "@aitianyu.cn/tianyu-store";

export interface INavigationItemState extends ITianyuReactState {
    icon: any;
    type: SourceIconType;
    text: string;
    size: number;
}

export interface INavigatorStateItem extends IterableType {
    assist: boolean;
    index: number;
    url?: string;
}

export interface INavigatorState extends ITianyuReactState {
    id: string;
    type: DisplayDirectionType;
    items: MapOfType<INavigatorStateItem>;
}
