/** @format */

import { IInstanceAction, IInstanceSelector } from "@aitianyu.cn/tianyu-store";
import { IButtonPortState } from "model/store/ButtonState";
import { IElementStorePorts } from "types/TianyuElement";

export interface IButtonPorts extends IElementStorePorts {
    click: IInstanceAction;

    state: IInstanceSelector<IButtonPortState>;
}
